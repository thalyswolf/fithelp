import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndicPage } from './indic';

@NgModule({
  declarations: [
    IndicPage,
  ],
  imports: [
    IonicPageModule.forChild(IndicPage),
  ],
})
export class IndicPageModule {}
