import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {

  items = Array(20);

  constructor( private popoverController: PopoverController) { }

  ngOnInit() {}
  onClick( valor: number) {
    console.log('item:', valor);
    this.popoverController.dismiss({
      item: valor
    });
  }

}
