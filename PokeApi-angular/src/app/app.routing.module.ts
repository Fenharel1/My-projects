import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'favoritos',
    loadChildren: () => 
      import('./favorites/favorites.module').then(
        (m) => m.FavoritesModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: 'catalogo',
    loadChildren: () => 
      import('./grid-pokemons/grid-pokemons.module').then(
        (m) => m.GridPokemonsModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: 'ejemplo',
    loadChildren: () =>
      import('./ejemplo-modulo/ejemplo-modulo.module').then(
        (mod) => mod.EjemploModuloModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => 
      import('./login/login.module').then(
        (m) => m.LoginModule
      )
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
