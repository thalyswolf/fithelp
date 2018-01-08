import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificPage } from './notific';

@NgModule({
  declarations: [
    NotificPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificPage),
  ],
})
export class NotificPageModule {}
