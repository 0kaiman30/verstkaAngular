import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  email: string = 'mail@example.com';
  name: string = 'John Doe';
  password: string = '***********';
  repassword: string = '***********';
}
