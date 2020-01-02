import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shooping-cart',
  templateUrl: './shooping-cart.page.html',
  styleUrls: ['./shooping-cart.page.scss'],
})
export class ShoopingCartPage implements OnInit {

  numero: number = 0;

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.numero += 1 ;
  }
  restar() {
    if(this.numero > 0) {
      this.numero -= 1 ;
    }
  }
  borrar() {
    this.numero = 0;
  }

}
