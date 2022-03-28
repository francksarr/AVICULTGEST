import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddChairPage } from './add-chair.page';

const routes: Routes = [
  {
    path: '',
    component: AddChairPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddChairPageRoutingModule {}
