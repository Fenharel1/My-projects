                                                                     
import { PokemonObject } from './../../models/pokemonObj'             ;
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core'              ;
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { PokemonList } from 'src/app/models/pokemonList'              ; 
import { ListaPokemonBuscarService } from 'src/app/shared/lista-pokemon-buscar.service';
import { PokemonAPIService } from 'src/app/shared/pokemon-api.service';
                                                                       

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})
export class GridviewComponent implements OnInit, AfterViewInit {
  public pokemonsList: PokemonList[] = [];
  public pokemonObjectList: PokemonObject[] = [];
  public mostrarData: boolean = false;
  public pokemonObservableList: Observable<PokemonObject>[] = [];
  public pokemonObservableSlice: Observable<PokemonObject>[] = [];
  public pokemonDefecto!: PokemonObject;

  length = 1000;
  pageSize = 16;
  pageSizeOptions = [5, 10, 20, 100];
  pageIndex = 1;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageEvent!: PageEvent ;

  constructor(
    private pokemonService: PokemonAPIService,
    private searchServ: ListaPokemonBuscarService
  ) { }
  
  ngAfterViewInit() {
    this.paginator.page
      .subscribe((event:PageEvent) => {
        const startIndex = event.pageIndex * event.pageSize;
        if(this.mostrarData){
          this.pokemonObservableSlice =  this.pokemonObservableList.slice(startIndex, startIndex + event.pageSize);
        }else{
          this.loadPokemons(event.pageSize, startIndex)
        }
      });
  }

  ngOnInit(): void {
    this.searchServ.cambiarLista.subscribe(
      res => {
        if(res){
          this.mostrarData = true;
          this.pokemonObservableList = this.searchServ.getSearchListPokemons();
          this.length = this.pokemonObservableList.length;
          this.pokemonObservableSlice = this.pokemonObservableList.slice(0,this.pageSize);
        }else{
          this.length = 1000;
          this.mostrarData = false;
          this.loadPokemons(this.pageSize, 0);
        }
      }
    )
    this.pokemonService.getPokemon("1").subscribe(
      res => {this.pokemonDefecto = res}
    )
  }

  loadPokemons(limit: number, offset: number): void{
    this.pokemonObjectList = [];
    this.pokemonService.getPokemonList(limit,offset).subscribe(
      (res) => {
        this.pokemonsList = res;
        this.pokemonsList.map((pokeSimple: PokemonList)=>{
          this.pokemonService.getPokemon(pokeSimple.name).subscribe(
            (res)=>{
              this.pokemonObjectList.push(res);
            }
          )
        })
    })
  }
}
