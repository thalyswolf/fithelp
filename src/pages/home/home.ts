import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController) {

  }

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