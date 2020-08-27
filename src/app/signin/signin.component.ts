import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form } from '@angular/forms';
import { SignupService }from '../services/signup.service';
import { Signin } from '../shared/signin';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInForm: FormGroup ;
  signIn: Signin ;

  constructor(private signupseervice: SignupService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.createSignIn()
  }

  createSignIn() {
    this.signInForm = this.fb.group({
      email: '',
      password: '',
    })
  }


  onSubmit() {
    this.signIn = this.signInForm.value;
    let signInCheck = this.signupseervice.checkAccount(this.signIn);
   if( signInCheck.check == 0) {
     this.snackbar.open('Account Verified' , 'Close',{duration: 5000});
      console.log("Account Verified");
   } else if ( signInCheck.check == 1 ){
    this.snackbar.open('Password Incorrect !!! Check your password again' , 'Close',{duration: 5000});
     console.log("Password Incorrect");
   } else if ( signInCheck.check = 2) {
    this.snackbar.open('Sorry !! Account doesnt exist' , 'Close',{duration: 5000});
     console.log("Account doesnt exist");
   }
  }

}
