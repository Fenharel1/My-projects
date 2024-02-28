import { EventEmitter, Injectable, Output } from '@angular/core';
import { PokemonObject } from '../models/pokemonObj';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ListaPokemonBuscarService {
  @Output() cambiarLista: EventEmitter<boolean> = new EventEmitter<boolean>;
  pokemonLista: string[] = [];
  pokemonBuscados$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.pokemonLista);
  pokeAPIurl: string = "https://pokeapi.co/api/v2";

  constructor(
    private http: HttpClient
  ) { }
  
  addSearchPokemon(pokeList: string[]){
    this.pokemonLista = pokeList
    this.pokemonBuscados$.next(this.pokemonLista);
    this.cambiarLista.emit(true);
  }

  getSearchListPokemons():Observable<PokemonObject>[]{
    let resulta: Observable<PokemonObject>[] = [];
    for(let poke of this.pokemonLista){
      resulta.push(this.http.get<PokemonObject>(this.pokeAPIurl+'/pokemon/'+poke))
    }
    return resulta;
  }

}
