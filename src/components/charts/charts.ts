import { Component } from '@angular/core';

/**
 * Generated class for the ChartsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'charts',
  templateUrl: 'charts.html'
})
export class ChartsComponent {

  text: string;

  constructor() {
    console.log('Hello ChartsComponent Component');
    this.text = 'Hello World';
  }

}
