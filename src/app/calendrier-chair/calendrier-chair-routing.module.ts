import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendrierChairPage } from './calendrier-chair.page';

const routes: Routes = [
  {
    path: '',
    component: CalendrierChairPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendrierChairPageRoutingModule {}
