import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RootObject } from '../../ejemplo-modulo/ejemplo/model';
import { ReactiveService } from '../../shared/reactive.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit, OnDestroy {
  infoPokemon!: RootObject;
  unsubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(private reactiveService: ReactiveService) {}
  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.reactiveService
      .getInfoPokemon()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((infoPokemon) => {
        this.infoPokemon = infoPokemon;
        console.log(infoPokemon);
      });
  }
}
