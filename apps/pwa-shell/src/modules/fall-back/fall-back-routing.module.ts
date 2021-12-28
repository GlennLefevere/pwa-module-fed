import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FallBackComponent} from './components/fall-back/fall-back.component';

const routes: Routes = [
  {
    path: '',
    component: FallBackComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FallBackRoutingModule {
}
