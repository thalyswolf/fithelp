import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewpassPage } from './newpass';

@NgModule({
  declarations: [
    NewpassPage,
  ],
  imports: [
    IonicPageModule.forChild(NewpassPage),
  ],
})
export class NewpassPageModule {}
