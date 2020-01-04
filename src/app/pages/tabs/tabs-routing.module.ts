import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'schedule'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        loadChildren: '../avatar/avatar.module#AvatarPageModule'
      },
      {
        path: 'speakers',
        loadChildren: '../list/list.module#ListPageModule'
      },
      {
        path: 'map',
        loadChildren: '../buttons/buttons.module#ButtonsPageModule'
      },
      {
        path: 'about',
        loadChildren: '../card/card.module#CardPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
