import { ListaPokemonBuscarService } from './../shared/lista-pokemon-buscar.service';
import { Subject, Observable, startWith, map } from 'rxjs';
import { Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokemonAPIService } from '../shared/pokemon-api.service';
import { PokemonList } from '../models/pokemonList';
import { MatDialog } from '@angular/material/dialog';
import { DialogCardComponent } from '../grid-pokemons/dialog-card/dialog-card.component';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit{
  public listaPokemons: PokemonList[] = [];
  unsubscribe$: Subject<boolean> = new Subject<boolean>();
  myControl = new FormControl('');
  options: string[] = ['Hola','Rei','Vi'];
  filteredOptions!: Observable<string[]>;

  constructor(
    private pokeApi: PokemonAPIService,
    public dialog: MatDialog,
    private searchServ: ListaPokemonBuscarService
  ) { }

  ngOnInit(): void {
    this.pokeApi
    .getPokemonList(1000,0)
    .subscribe(
      (res)=>{
        this.listaPokemons = res;
        this.options = this.listaPokemons.map<string>((poke:PokemonList)=>poke.name)
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value =>{
            if((value==undefined?0:value.length)>=2){
              this.searchServ.addSearchPokemon(this._filter(value || ''));
            }else{
              this.searchServ.cambiarLista.emit(false);
            }
            return this._filter(value || '')
          }
          )
        );
      }
    )
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  searchPokemon():void{
    if(this.myControl.value !== ''){
      this.openDialog();
    }
  }

  openDialog(): void{
    this.pokeApi.getPokemon(this.myControl.value==null?"1":this.myControl.value).subscribe(
      (res)=>{
        const dialogoRef = this.dialog.open(
          DialogCardComponent,{
            data: res,
            height: '600px',
            width: '400px',
          }
        );
      }
    )
  }
}
