import { NotificModel } from './../../models/notific.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  
  notifications:NotificModel[] =[{
    id:'Teste1',
    title:'Teste1',
    date:'43',
    time:"24"
  },
  {
    id:'Teste2',
    title:'Teste1',
    date:'43',
    time:"24"
  }];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad NotificPage');
  }

}
