import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  @ViewChild(IonReorderGroup, {static: true}) reorderGroup: IonReorderGroup;

  personajes = ['Iron man', 'Spider-man', 'Capitán américa', 'Hulk', 'Black Widow'];
  personajes2 = ['Senkku', 'Goku', 'Luffy', 'Asta', 'Izuku'];

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log(this.personajes);
  }

  doReorder( event ) {
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);
    event.detail.complete();
  }
  doReorderItems( event ) {
    // Forma en como lo hicieron en el curso
    // const itemMover = this.personajes2.splice( event.detail.from, 1)[0];
    // this.personajes2.splice( event.detail.to, 0, itemMover); 

    // Forma en como lo hice yo según la documentación (más simple)
    console.log('Before complete', this.personajes2);
    this.personajes2 = event.detail.complete(this.personajes2);
    console.log('After complete', this.personajes2);
  }
}
