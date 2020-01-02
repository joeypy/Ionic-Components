import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoopingCartPage } from './shooping-cart.page';

const routes: Routes = [
  {
    path: '',
    component: ShoopingCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoopingCartPageRoutingModule {}
