import { HomePage } from './../../pages/home/home';
import { NotificModel } from './../../models/notific.model';
import { Component, Input } from '@angular/core';

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
  ver;
  @Input('notific') notifications:NotificModel[];
  constructor() {

    console.log('Hello NotificationComponent Component');
    this.text = 'Hello World';
  }

  showCont(v:boolean) {
    this.ver = !this.ver;
  }

  ionViewDidLoad() { 
    console.log('ionViewDidLoad NotificPage');
  }
  newNotif(){
    
  }
  onHome():void{
    this.navCtrl.push(HomePage,{
    });
  }
}
