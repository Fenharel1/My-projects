import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridPokemonsRoutingModule } from './grid-pokemons-routing.module';
import { GridviewComponent } from './gridview/gridview.component';
import { GridcardComponent } from './gridcard/gridcard.component';
import { MaterialModule } from '../material.module';
import { DialogCardComponent } from './dialog-card/dialog-card.component';

@NgModule({
  declarations: [
    GridcardComponent,
    DialogCardComponent,
    GridviewComponent,
  ],
  imports: [
    CommonModule,
    GridPokemonsRoutingModule,
    MaterialModule,
  ],
  exports: [
    DialogCardComponent
  ]
})
export class GridPokemonsModule { }
