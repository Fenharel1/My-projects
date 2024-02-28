import { PokemonObject } from './../../models/pokemonObj';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCardComponent } from '../dialog-card/dialog-card.component';

@Component({
  selector: 'app-gridcard',
  templateUrl: './gridcard.component.html',
  styleUrls: ['./gridcard.component.css']
})
export class GridcardComponent implements OnInit {
  @Input() pokemon!: PokemonObject;

  constructor(
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogoRef = this.dialog.open(
      DialogCardComponent,{
        data: this.pokemon,
        height: '600px',
        width: '400px',
      }
    );
  }
}

