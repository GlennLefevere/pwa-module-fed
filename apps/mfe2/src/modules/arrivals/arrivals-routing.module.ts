import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArrivalsComponent} from './components/arrivals/arrivals.component';

const routes: Routes = [
  {
    path: '',
    component: ArrivalsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArrivalsRoutingModule {
}
