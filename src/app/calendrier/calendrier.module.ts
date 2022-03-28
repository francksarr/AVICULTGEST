import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CALENDRIERPageRoutingModule } from './calendrier-routing.module';

import { CALENDRIERPage } from './calendrier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CALENDRIERPageRoutingModule
  ],
  declarations: [CALENDRIERPage]
})
export class CALENDRIERPageModule {}
