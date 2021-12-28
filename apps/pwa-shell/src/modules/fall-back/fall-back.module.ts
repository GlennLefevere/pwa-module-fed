import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FallBackRoutingModule } from './fall-back-routing.module';
import { FallBackComponent } from './components/fall-back/fall-back.component';


@NgModule({
  declarations: [
    FallBackComponent
  ],
  imports: [
    CommonModule,
    FallBackRoutingModule
  ]
})
export class FallBackModule { }
