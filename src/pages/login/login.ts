import { Component } from '@angular/core';
import { LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';
import { NewpassPage } from '../newpass/newpass';
import { UserProvider } from "../../providers/user/user.service";

import { AlertController } from 'ionic-angular';
import { UserModel } from './../../models/user.model';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user:UserModel;
  email:string;
  password:string;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public userService:UserProvider,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onHome():void{
    this.navCtrl.push(HomePage,{
    });
  }

  onCadastro():void{
    this.navCtrl.push(CadastroPage,{
    });
  }
  
  onNewpass():void{
    this.navCtrl.push(NewpassPage,{
    });
  }
  onLogin(){
    let loader = this.loadingCtrl.create({
      content: "Efetuando o login"
    });
    loader.present();
    this.userService.auth(this.email, this.password).then((data:{
        token:string,
        data:{
          id:string,
          email:string,
          name:string,
          contact:string,
          account:number,
          password:string
        }
      })=>{ 
      loader.dismiss();
      this.user = data.data;
      console.log(this.user);
      this.navCtrl.push(HomePage, {
        token:data.token,
        user:this.user
      });
    }).catch((e)=>{
      loader.dismiss();
      let alert = this.alertCtrl.create({
          title: 'Ocorreu um erro',
          subTitle: e.message,
          buttons: ['OK']
      });
      alert.present();
    });
  }
}
