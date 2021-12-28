import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ArrivalsRoutingModule} from './arrivals-routing.module';
import {ArrivalsComponent} from './components/arrivals/arrivals.component';
import {ArrivalsService} from './services/arrivals.service';
import {HttpClientModule} from '@angular/common/http';
import {ArrivalsHttpService} from './http-services/arrivals.http-service';
import {FlightStatusPipe} from './pipes/flight-status.pipe';


@NgModule({
  declarations: [
    ArrivalsComponent,
    FlightStatusPipe,
  ],
  imports: [
    CommonModule,
    ArrivalsRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ArrivalsService,
    ArrivalsHttpService,
  ],
})
export class ArrivalsModule {
}
