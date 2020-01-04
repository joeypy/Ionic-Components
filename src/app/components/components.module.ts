import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { InfoComponent } from './popup/info/info.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    InfoComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
