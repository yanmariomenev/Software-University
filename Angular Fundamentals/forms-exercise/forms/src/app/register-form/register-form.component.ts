import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  phoneNumbers: Array<string> = ['+359', '+769', '+123'];
  constructor() { }

  ngOnInit(): void {
  }

  register(formData){

  }
}
