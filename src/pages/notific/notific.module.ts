import { NotificationComponent } from './../../components/notification/notification';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificPage } from './notific';

@NgModule({
  declarations: [
    NotificPage,
    NotificationComponent
  ],
  imports: [
    IonicPageModule.forChild(NotificPage),
  ],
})
export class NotificPageModule {}
