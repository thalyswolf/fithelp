import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nome:string;
  
  constructor(public navCtrl: NavController, public navParams:NavParams) {
    this.nome = this.navParams.get('nome');
    console.log(this.nome);
    
  }

}
