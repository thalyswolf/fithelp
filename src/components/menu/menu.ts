import { FichaPage } from './../../pages/ficha/ficha';
import { Nav, NavController } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';

/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {
  pages:[{title:string, component:any}];
  constructor() {
    console.log('Hello MenuComponent Component');

  }

}
