import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistrictsPageRoutingModule } from './districts-routing.module';

import { DistrictsPage } from './districts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistrictsPageRoutingModule
  ],
  declarations: [DistrictsPage]
})
export class DistrictsPageModule {}
