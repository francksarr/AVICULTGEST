import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChairEditPageRoutingModule } from './chair-edit-routing.module';

import { ChairEditPage } from './chair-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChairEditPageRoutingModule
  ],
  declarations: [ChairEditPage]
})
export class ChairEditPageModule {}
