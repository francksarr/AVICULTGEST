import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPondeusePage } from './add-pondeuse.page';

const routes: Routes = [
  {
    path: '',
    component: AddPondeusePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPondeusePageRoutingModule {}
