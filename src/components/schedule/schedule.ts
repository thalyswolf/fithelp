import { Component } from '@angular/core';

/**
 * Generated class for the ScheduleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'schedule',
  templateUrl: 'schedule.html'
})
export class ScheduleComponent {

  text: string;

  constructor() {
    console.log('Hello ScheduleComponent Component');
    this.text = 'Hello World';
  }

}
