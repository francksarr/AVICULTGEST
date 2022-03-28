import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddChairPageRoutingModule } from './add-chair-routing.module';

import { AddChairPage } from './add-chair.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddChairPageRoutingModule
  ],
  declarations: [AddChairPage]
})
export class AddChairPageModule {}
