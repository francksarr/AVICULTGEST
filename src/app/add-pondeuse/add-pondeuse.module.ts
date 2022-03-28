import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPondeusePageRoutingModule } from './add-pondeuse-routing.module';

import { AddPondeusePage } from './add-pondeuse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPondeusePageRoutingModule
  ],
  declarations: [AddPondeusePage]
})
export class AddPondeusePageModule {}
