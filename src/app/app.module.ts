import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { LoginPage } from '../pages/login/login';
import { NewpassPage } from '../pages/newpass/newpass';
import { FichaPage } from '../pages/ficha/ficha';
import { GraphsPage } from '../pages/graphs/graphs';
import { NotificPage } from '../pages/notific/notific';
import { SearchPage } from '../pages/search/search';
import { IndicPage } from '../pages/indic/indic';
import { ConfigsPage } from '../pages/configs/configs';
import { ParallaxDirective } from '../directives/parallax/parallax'
import { UserProvider } from '../providers/user/user.service';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    NewpassPage,
    FichaPage,
    GraphsPage,
    NotificPage,
    SearchPage,
    IndicPage,
    ConfigsPage,
    ParallaxDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    NewpassPage,
    FichaPage,
    GraphsPage,
    NotificPage,
    SearchPage,
    IndicPage,
    ConfigsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}
