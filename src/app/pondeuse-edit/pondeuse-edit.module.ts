import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PondeuseEditPageRoutingModule } from './pondeuse-edit-routing.module';

import { PondeuseEditPage } from './pondeuse-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PondeuseEditPageRoutingModule
  ],
  declarations: [PondeuseEditPage]
})
export class PondeuseEditPageModule {}
