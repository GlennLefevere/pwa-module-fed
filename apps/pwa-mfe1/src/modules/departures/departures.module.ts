import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DeparturesRoutingModule} from './departures-routing.module';
import {DeparturesComponent} from './components/departures/departures.component';
import {FlightStatusPipe} from './pipes/flight-status.pipe';
import {HttpClientModule} from '@angular/common/http';
import {DeparturesService} from './services/departures.service';
import {DeparturesHttpService} from './http-services/departures.http-service';


@NgModule({
  declarations: [
    DeparturesComponent,
    FlightStatusPipe,
  ],
  imports: [
    CommonModule,
    DeparturesRoutingModule,
    HttpClientModule,
  ],
  providers: [
    DeparturesService,
    DeparturesHttpService,
  ],
})
export class DeparturesModule {
}
