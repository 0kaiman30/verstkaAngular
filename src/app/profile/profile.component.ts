import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  email: string = 'mail@example.com';
  password: string = '***********';
  repassword: string = '***********';
}
