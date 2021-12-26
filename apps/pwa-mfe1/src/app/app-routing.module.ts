import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'flights',
    pathMatch: 'full',
  },
  {
    path: 'flights',
    loadChildren: () => import('../modules/flights/flights.module').then(m => m.FlightsModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {

}
