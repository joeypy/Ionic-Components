import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { InfoComponent } from '../../components/popup/info/info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private popoverController: PopoverController) { }

  ngOnInit() {
  }
  async mostrarPop( event ) {
    const popover = await this.popoverController.create({
      component: InfoComponent,
      event,
      mode: 'ios',
      backdropDismiss: false,
      translucent: true
    });
    await popover.present();
    const { data } = await popover.onDidDismiss();
    console.log( 'Padre', data );
  }

}
