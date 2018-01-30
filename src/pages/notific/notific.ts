import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the NotificPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notific',
  templateUrl: 'notific.html',
})
export class NotificPage {
  title:string="";
  ver:boolean=true;
  notifications:any = [{
    title:"teste",
    day:"seg",
    hour:"12:20",
    visible:false
  }];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  showCont(v:boolean) {
    this.ver = !this.ver;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificPage');
  }
  newNotif(){
    this.notifications.push({
      title:"ericksao",
      day:"seg",
      hour:"12:20",
      visible:false
    })
  }
  onHome():void{
    this.navCtrl.push(HomePage,{
    });
  }

}
