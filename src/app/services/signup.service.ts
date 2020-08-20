import { Injectable } from '@angular/core';
import { Signup } from '../shared/signup';

@Injectable({
  providedIn: 'root'
})


export class SignupService {

  SIGNUP: Signup[] =[];

  constructor() { }

  signUp(data: Signup) {
    this.SIGNUP.push(data);
    console.log(this.SIGNUP);
  }
}
