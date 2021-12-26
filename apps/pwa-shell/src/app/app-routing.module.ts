import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {loadRemoteModule} from './test';
import {environment} from '../environments/environment';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'flights',
    pathMatch: 'full',
  },
  {
    path: 'flights',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: `${environment.remoteModule}remoteEntry.js`,
        exposedModule: './Module',
      }).then(m => m.FlightsModule),
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
