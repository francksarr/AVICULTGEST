import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PondeuseEditPage } from './pondeuse-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PondeuseEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PondeuseEditPageRoutingModule {}
