import { Component } from '@angular/core';

@Component({
  selector: 'app-drop-a-line',
  templateUrl: './drop-a-line.component.html',
  styleUrls: ['./drop-a-line.component.scss'],
})
export class DropALineComponent {
  email: string = 'mail@example.com';
  name: string = 'John Doe';
  message: string = '';
}
