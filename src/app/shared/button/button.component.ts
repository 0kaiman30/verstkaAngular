import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string = 'Button';
  @Input() width: string = '40%';
  @Input() position: string = 'relative';
  @Input() bottom: string = '0';
  @Input() left: string = '0';
}
