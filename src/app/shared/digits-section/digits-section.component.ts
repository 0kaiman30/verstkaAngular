import { Component } from '@angular/core';

@Component({
  selector: 'app-digits-section',
  templateUrl: './digits-section.component.html',
  styleUrls: ['./digits-section.component.scss'],
})
export class DigitsSectionComponent {
  info = [
    {
      digits: '999529 000 000',
      words: 'Зазружено файлов на сервис',
      image: '../../../assets/images/little-icon.png',
      alt: 'Download Icon',
    },
    {
      digits: '235 764 784',
      words: 'Зазрегистрировано пользователей',
      image: '../../../assets/images/little-icon.png',
      alt: 'User Icon',
    },
  ];
}
