import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {FlightsComponent} from './components/flights/flights.component';

const routes: Route[] = [
  {
    path: '',
    component: FlightsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FlightsRoutingModule {

}
