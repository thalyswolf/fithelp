import { ConfigsPage } from './../pages/configs/configs';
import { IndicPage } from './../pages/indic/indic';
import { SearchPage } from './../pages/search/search';
import { NotificPage } from './../pages/notific/notific';
import { GraphsPage } from './../pages/graphs/graphs';
import { FichaPage } from './../pages/ficha/ficha';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CadastroPage } from '../pages/cadastro/cadastro';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  @ViewChild(Nav) nav:Nav;
  pages:[{title:string, component:any, icon:string}];
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages=[{
      title:'Ficha',
      component:FichaPage,
      icon:'md-list-box'
    },
    {
      title:'GraphsPage',
      component:GraphsPage,
      icon:'md-list-box'
    },
    {
      title:'NotificPage',
      component:NotificPage,
      icon:'md-list-box'
    },
    {
      title:'SearchPage',
      component:SearchPage,
      icon:'md-list-box'
    },
    {
      title:'IndicPage',
      component:IndicPage,
      icon:'md-list-box'
    },
    {
      title:'ConfigsPage',
      component:ConfigsPage,
      icon:'md-list-box'
    }]
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
    
  onPage(page):void{
    this.nav.push(page.component);
  }
}

