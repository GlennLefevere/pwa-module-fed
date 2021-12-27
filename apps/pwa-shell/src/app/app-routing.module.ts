import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {loadRemoteModule} from './test';
import {environment} from '../environments/environment';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'arrivals',
    pathMatch: 'full',
  },
  {
    path: 'arrivals',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: `${environment.mfe}remoteEntry.js`,
        exposedModule: './Module',
      }).then(m => m.ArrivalsModule),
  },
  {
    path: 'departures',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: `${environment.pwa_mfe}remoteEntry.js`,
        exposedModule: './Module',
      }).then(m => m.DeparturesModule),
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
