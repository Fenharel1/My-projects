import { Component, Input, OnInit } from '@angular/core';
import { PokemonObject } from 'src/app/models/pokemonObj';
import { FavoritesServiceService } from 'src/app/shared/favorites-service.service';

@Component({
  selector: 'app-fav-card',
  templateUrl: './fav-card.component.html',
  styleUrls: ['./fav-card.component.css']
})
export class FavCardComponent implements OnInit {
  @Input() pokemon!: PokemonObject;
  constructor(
    private favServ: FavoritesServiceService
  ) { }

  ngOnInit(): void {
  }

  delFavorite(): void{
    this.favServ.delFavoritePokemon(this.pokemon.id);
  }

}
