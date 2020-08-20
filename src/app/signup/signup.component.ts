import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { Signup } from '../shared/signup';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm : FormGroup ; /*This is the form model which will host our reactive form*/
  signUp : Signup ;/*This acts like a data model for us */

  constructor(private fb:FormBuilder,
    private signupservice: SignupService) {
    this.createForm(); /* when this class is created this form will be created */
   }

  ngOnInit(): void {
  }

  createForm() {
    this.signUpForm = this.fb.group({
      firstname : '',
      lastname: '',
      email: '',
      password: '',
    });
  }

  onSubmit() {
    this.signUp = this.signUpForm.value ;
    this.signupservice.signUp(this.signUp);
    console.log(this.signUp);
    this.signUpForm.reset();
  }

}
