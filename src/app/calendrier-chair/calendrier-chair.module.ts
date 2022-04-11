import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendrierChairPageRoutingModule } from './calendrier-chair-routing.module';

import { CalendrierChairPage } from './calendrier-chair.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendrierChairPageRoutingModule
  ],
  declarations: [CalendrierChairPage]
})
export class CalendrierChairPageModule {}
