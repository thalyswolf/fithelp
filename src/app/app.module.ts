import { NotificationComponent } from './../components/notification/notification';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StudentsComponent } from './../components/students/students';
import { ChartsComponent } from './../components/charts/charts';
import { ScheduleComponent } from './../components/schedule/schedule';
import { MenuComponent } from './../components/menu/menu';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ParallaxDirective } from '../directives/parallax/parallax'
import { UserProvider } from '../providers/user/user.service';
import { HttpModule } from "@angular/http";
import { HideHeaderDirective } from '../directives/hide-header/hide-header';
import { StudentProvider } from '../providers/student/student.service';
import { ScheduleProvider } from '../providers/schedule/schedule.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ParallaxDirective,
    MenuComponent,
    HideHeaderDirective,
    ScheduleComponent,
    ChartsComponent,
    StudentsComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MenuComponent,
    NotificationComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    StudentProvider,
    ScheduleProvider,
    HttpClient
  ]
})
export class AppModule {}
