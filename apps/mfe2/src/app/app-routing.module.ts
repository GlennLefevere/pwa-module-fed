import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'arrivals',
    pathMatch: 'full',
  },
  {
    path: 'arrivals',
    loadChildren: () => import('../modules/arrivals/arrivals.module').then(m => m.ArrivalsModule),
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
