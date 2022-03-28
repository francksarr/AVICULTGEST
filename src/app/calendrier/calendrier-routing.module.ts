import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CALENDRIERPage } from './calendrier.page';

const routes: Routes = [
  {
    path: '',
    component: CALENDRIERPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CALENDRIERPageRoutingModule {}
