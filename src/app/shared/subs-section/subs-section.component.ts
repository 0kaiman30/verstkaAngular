import { Component } from '@angular/core';

@Component({
  selector: 'app-subs-section',
  templateUrl: './subs-section.component.html',
  styleUrls: ['./subs-section.component.scss'],
})
export class SubsSectionComponent {
  subscriptionPlans = [
    {
      duration: '30 days',
      price: '$20.99',
      isMostPopular: false,
      backgroundImage: '../../../assets/images/30card.png',
      specs: ['1Tb Free space', '4 Tb Monthly space', '100 Mbit Speed', '3000 sessions'],
    },
    {
      duration: '90 days',
      price: '$46.99',
      isMostPopular: true,
      backgroundImage: '../../../assets/images/90card.png',
      specs: ['1Tb Free space', '4 Tb Monthly space', '100 Mbit Speed', '3000 sessions'],
    },
    {
      duration: '365 days',
      price: '$127.99',
      isMostPopular: false,
      backgroundImage: '../../../assets/images/365card.png',
      specs: ['1Tb Free space', '4 Tb Monthly space', '100 Mbit Speed', '3000 sessions'],
    },
  ];
}
