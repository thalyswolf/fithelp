import { UserProvider } from './../../providers/user/user.service';
import { UserModel } from './../../models/user.model';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StudentProvider } from "../../providers/student/student.service";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  header:any;
  //user:UserModel;
  nav:string='schedule';
  currentUser:UserModel;
  segment:string;
  student:any=[];
  constructor(public navCtrl: NavController,
              private navParams:NavParams,
              public userService:UserProvider,
              public studentService:StudentProvider
              ) {
    this.currentUser = this.navParams.get('user');
    this.student = this.studentService.students;
    // this.currentUser = {
    //   id:'123',
    //   name:'Ericksão',
    //   account:1,
    //   email:'thalys@',
    //   password:'123'
    // }
    }//this.navParams.get('user');

  //vou criar um método na API pra verificar se o usuário tá logado, ai quando implementar tu usar dentro desse método
  // ionViewCanEnter():boolean{
  // //se retornar false ele não permite que entre na page
  //   return true;
  // }
  ionViewDidLoad(){

  }
  onNav(n){
    
  }
}