import { UserModel } from './../../models/user.model';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //user:UserModel;
  constructor(public navCtrl: NavController,
              // private nacParams:NavParams
              ) {
    // this.user = this.nacParams.get('user');
  }
  //vou criar um método na API pra verificar se o usuário tá logado, ai quando implementar tu usar dentro desse método
  // ionViewCanEnter():boolean{
  // //se retornar false ele não permite que entre na page
  //   return true;
  // }
  
}