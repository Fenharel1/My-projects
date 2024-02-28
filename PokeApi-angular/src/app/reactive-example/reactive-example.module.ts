import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveExampleRoutingModule } from './reactive-example-routing.module';
import { ReactiveComponent } from './reactive/reactive.component';

@NgModule({
  declarations: [ReactiveComponent],
  imports: [CommonModule, ReactiveExampleRoutingModule],
  exports: [ReactiveComponent],
})
export class ReactiveExampleModule {}
