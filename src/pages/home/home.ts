import { UserModel } from './../../models/user.model';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FichaPage } from '../ficha/ficha';
import { GraphsPage } from '../graphs/graphs';
import { NotificPage } from '../notific/notific';
import { SearchPage } from '../search/search';
import { IndicPage } from '../indic/indic';
import { ConfigsPage } from '../configs/configs';

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
  onFicha():void{
    this.navCtrl.push(FichaPage,{
    });
  }
  onGraphs():void{
    this.navCtrl.push(GraphsPage,{
    });
  }
  onNotific():void{
    this.navCtrl.push(NotificPage,{
    });
  }
  onSearch():void{
    this.navCtrl.push(SearchPage,{
    });
  }
  onIndic():void{
    this.navCtrl.push(IndicPage,{
    });
  }
  onConfigs():void{
    this.navCtrl.push(ConfigsPage,{
    });
  }
}