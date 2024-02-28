import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesPokemonComponent } from './favorites-pokemon/favorites-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: FavoritesPokemonComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
