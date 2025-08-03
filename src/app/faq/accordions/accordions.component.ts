import { Component } from '@angular/core';

@Component({
  selector: 'app-accordions-section',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss'],
})
export class AccordionsComponent {
  faqItems = Array(8).fill({
    question: 'How to install?',
    answer:
      'Orci nibh faucibus nunc aliquet diam. Necque quis dignissim ipsum eget sed massa feugiat sit nibh. Pretium eget morbi tincidunt justo, mattis tincidunt facilisis lorem. Commodo, sit enim, amet fringilla in proin purus. Et odio arcu libero at sed quam tempor, neque. Scelerisque arcu vel vehicula eget posuere. Sed urna velit aliquam in pharetra. Tempus libero elit ac hac et morbi. Sed viverra vel adipiscing mauris, congue tincidunt integer. Sed gravida in cursus pellentesque odio.',
  });
}
