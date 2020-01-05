import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { Observable } from 'rxjs';

import { Componente } from '../../components/interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit, OnDestroy, AfterViewInit {

  componentes: Observable<Componente[]>;
  backButtonSubscription;

  constructor(private platform: Platform,
              private menuController: MenuController,
              private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }
  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }
  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

  toggleMenu() {
    this.menuController.toggle();
  }

}

interface Componentes {
  icon: string;
  name: string;
  redirectTo: string;
}
