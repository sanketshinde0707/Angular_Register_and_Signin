import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { Signup } from '../shared/signup';
import { SignupService } from '../services/signup.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm : FormGroup ; /*This is the form model which will host our reactive form*/
  signUp : Signup ;/*This acts like a data model for us */
  @ViewChild('sform') signUpFormDirective ;

  constructor(private fb:FormBuilder,
    private signupservice: SignupService,
    private snackbar: MatSnackBar) {
    this.createForm(); /* when this class is created this form will be created */
   }

  ngOnInit(): void {
  }

  createForm() {
    this.signUpForm = this.fb.group({
      firstname : ['',Validators.required],
      lastname: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
    });
  }

  onSubmit() {
    this.signUp = this.signUpForm.value ;/*This gives a javascript object */
    /*Here i am mapping the form model and data model ,and since both of them are of the same type we can directly map them */
    this.signupservice.signUp(this.signUp);
    let snackBarRef = this.snackbar.open('Sign up succesfull !', 'Close');
    console.log(this.signUp);
    this.signUpForm.reset();
    this.signUpFormDirective.resetForm();
  }

}
