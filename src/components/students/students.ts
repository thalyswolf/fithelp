import { Component, Input } from '@angular/core';

/**
 * Generated class for the StudentsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'students',
  templateUrl: 'students.html'
})
export class StudentsComponent {
  @Input('students') students:any; 
  constructor() {

  }

}
