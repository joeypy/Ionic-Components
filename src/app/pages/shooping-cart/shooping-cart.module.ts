import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoopingCartPageRoutingModule } from './shooping-cart-routing.module';

import { ShoopingCartPage } from './shooping-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoopingCartPageRoutingModule
  ],
  declarations: [ShoopingCartPage]
})
export class ShoopingCartPageModule {}
