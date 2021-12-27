import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'departures',
    pathMatch: 'full',
  },
  {
    path: 'departures',
    loadChildren: () => import('../modules/departures/departures.module').then(m => m.DeparturesModule),
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
