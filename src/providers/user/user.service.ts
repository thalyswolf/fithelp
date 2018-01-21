import { UserModel } from './../../models/user.model';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  currentUser:UserModel;
  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }

  auth(email, password){
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.post('https://fithelp-tmqalxtgee.now.sh/users/authenticate',  {
	      "email":email,
	      "password":password
      }, options)
      .toPromise()
      .then((response) =>{   
        this.currentUser = response.json();
        resolve(response.json());
    })
     .catch((error) =>{
      console.error('API Error : ', error.status);
      console.error('API Error : ', JSON.stringify(error));
      reject(error.json());
      });
    });
  }
}
