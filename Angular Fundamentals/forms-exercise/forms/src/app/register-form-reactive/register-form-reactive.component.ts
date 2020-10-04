import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form-reactive',
  templateUrl: './register-form-reactive.component.html',
  styleUrls: ['./register-form-reactive.component.css']
})
export class RegisterFormReactiveComponent implements OnInit {
  form;
  userPattern: RegExp = /[A-Z][a-z]+\s[A-Z][a-z]+/;
  emailPattern: RegExp = /^^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      fullName:['', [Validators.required, Validators.pattern(this.userPattern)]],
      email:['', [Validators.email,Validators.required]],
      
    })
  }
 register(){
 console.log(this.form)
 }

 get f(){
   return this.form.controls;
 }
}
