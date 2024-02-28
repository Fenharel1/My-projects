import { Injectable, EventEmitter } from '@angular/core';
import { PokemonObject } from '../models/pokemonObj';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesServiceService {
  pokemonLista: PokemonObject[] = [];
  pokemonFavorito$: BehaviorSubject<PokemonObject[]> = new BehaviorSubject<PokemonObject[]>(this.pokemonLista);
  
  constructor() { }
  
  addFavoritePokemon(poke: PokemonObject):boolean{
    const index = this.pokemonLista.findIndex((ele:PokemonObject) => ele.id === poke.id); // Verificamos si el elemento ya existe en el array
    if (index === -1) {
      this.pokemonLista.push(poke)
    } else {
      return false;
    }
    this.pokemonFavorito$.next(this.pokemonLista);
    return true;
  }

  delFavoritePokemon(id: number){
    const index = this.pokemonLista.findIndex((ele:PokemonObject) => ele.id === id); // Verificamos si el elemento ya existe en el array
    if (index > -1) {
      this.pokemonLista.splice(index, 1);
    }
    this.pokemonFavorito$.next(this.pokemonLista);
  }

  getFavoritePokemon(){
    return this.pokemonFavorito$.asObservable();
  }


}
