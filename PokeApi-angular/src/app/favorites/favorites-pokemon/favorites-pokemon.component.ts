import { takeUntil, Subject, Observable, startWith, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PokemonObject } from 'src/app/models/pokemonObj';
import { FavoritesServiceService } from 'src/app/shared/favorites-service.service';
import { FormControl } from '@angular/forms';

export interface User {
  name: string;
}

@Component({
  selector: 'app-favorites-pokemon',
  templateUrl: './favorites-pokemon.component.html',
  styleUrls: ['./favorites-pokemon.component.css'],
})
export class FavoritesPokemonComponent implements OnInit {
  public pokemonFavList!: Observable<PokemonObject[]>;
  unsubscribe$: Subject<boolean> = new Subject<boolean>();

  myControl = new FormControl('');
  options: string[] = ['Hola'];

  filteredOptions!: Observable<string[]>;


  constructor(
    public favService: FavoritesServiceService
  ) {}

  ngOnInit(): void {
    this.pokemonFavList = this.favService.getFavoritePokemon();
  }
}
