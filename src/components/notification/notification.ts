import { Component } from '@angular/core';

/**
 * Generated class for the NotificationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'notification',
  templateUrl: 'notification.html'
})
export class NotificationComponent {

  text: string;

  constructor() {
    console.log('Hello NotificationComponent Component');
    this.text = 'Hello World';
  }

}
