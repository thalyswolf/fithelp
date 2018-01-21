import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StudentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentProvider {
  public students:any =[]
  constructor(public http: HttpClient) {
    console.log('Hello StudentProvider Provider');
    this.students =[{
    name:'Sony Erickson',
    photo:'https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.0-9/17553917_967608476709302_3600070099572595519_n.jpg?oh=118f9390d16f2c044527f45d7190ef27&oe=5AEE98BA'
  },{
    name:'Sony Erickson',
    photo:'https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.0-9/17553917_967608476709302_3600070099572595519_n.jpg?oh=118f9390d16f2c044527f45d7190ef27&oe=5AEE98BA'
  },{
    name:'Sony Erickson',
    photo:'https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.0-9/17553917_967608476709302_3600070099572595519_n.jpg?oh=118f9390d16f2c044527f45d7190ef27&oe=5AEE98BA'
  },{
    name:'Sony Erickson',
    photo:'https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.0-9/17553917_967608476709302_3600070099572595519_n.jpg?oh=118f9390d16f2c044527f45d7190ef27&oe=5AEE98BA'
  },{
    name:'Sony Erickson',
    photo:'https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.0-9/17553917_967608476709302_3600070099572595519_n.jpg?oh=118f9390d16f2c044527f45d7190ef27&oe=5AEE98BA'
  },{
    name:'Sony Erickson',
    photo:'https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.0-9/17553917_967608476709302_3600070099572595519_n.jpg?oh=118f9390d16f2c044527f45d7190ef27&oe=5AEE98BA'
  },{
    name:'Sony Erickson',
    photo:'https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.0-9/17553917_967608476709302_3600070099572595519_n.jpg?oh=118f9390d16f2c044527f45d7190ef27&oe=5AEE98BA'
  },{
    name:'Sony Erickson',
    photo:'https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.0-9/17553917_967608476709302_3600070099572595519_n.jpg?oh=118f9390d16f2c044527f45d7190ef27&oe=5AEE98BA'
  },{
    name:'Sony Erickson',
    photo:'https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.0-9/17553917_967608476709302_3600070099572595519_n.jpg?oh=118f9390d16f2c044527f45d7190ef27&oe=5AEE98BA'
  },{
    name:'Sony Erickson',
    photo:'https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.0-9/17553917_967608476709302_3600070099572595519_n.jpg?oh=118f9390d16f2c044527f45d7190ef27&oe=5AEE98BA'
  },{
    name:'Sony Erickson',
    photo:'https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.0-9/17553917_967608476709302_3600070099572595519_n.jpg?oh=118f9390d16f2c044527f45d7190ef27&oe=5AEE98BA'
  },{
    name:'Sony Erickson',
    photo:'https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.0-9/17553917_967608476709302_3600070099572595519_n.jpg?oh=118f9390d16f2c044527f45d7190ef27&oe=5AEE98BA'
  },{
    name:'Sony Erickson',
    photo:'https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.0-9/17553917_967608476709302_3600070099572595519_n.jpg?oh=118f9390d16f2c044527f45d7190ef27&oe=5AEE98BA'
  },{
    name:'Sony Erickson',
    photo:'https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.0-9/17553917_967608476709302_3600070099572595519_n.jpg?oh=118f9390d16f2c044527f45d7190ef27&oe=5AEE98BA'
  },{
    name:'Sony Erickson',
    photo:'https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.0-9/17553917_967608476709302_3600070099572595519_n.jpg?oh=118f9390d16f2c044527f45d7190ef27&oe=5AEE98BA'
  },{
    name:'Sony Erickson',
    photo:'https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.0-9/17553917_967608476709302_3600070099572595519_n.jpg?oh=118f9390d16f2c044527f45d7190ef27&oe=5AEE98BA'
  }]
  }

}
