import { Injectable } from '@angular/core';
import { Signup } from '../shared/signup';
import { Signin } from '../shared/signin';

@Injectable({
  providedIn: 'root'
})


export class SignupService {

  SIGNUP: Signup[] =[];
  result: string; 

  constructor() { }

  signUp(data: Signup) {
    this.SIGNUP.push(data);
    console.log(this.SIGNUP);
  }

  checkAccount(data: Signin){
    let signupdata = data;

    for (let i = 0; i < this.SIGNUP.length; i++) {
      const element = this.SIGNUP[i];

      if(signupdata.email == element.email && signupdata.password == element.password){
        this.SIGNUP[i].check = 0 ;
        return  this.SIGNUP[i];
      } else if ( signupdata.email == element.email && signupdata.password != element.password ) {
        this.SIGNUP[i].check = 1;
        return this.SIGNUP[i];
      } else {
        continue ;
      }

    }

    this.SIGNUP[0].check = 2
    return this.SIGNUP[0];

  }
}
