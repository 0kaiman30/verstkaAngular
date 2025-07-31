import { Component } from '@angular/core';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss'],
})
export class InfoSectionComponent {
  features = [
    {
      icon: '../../../assets/images/little-icon.png',
      title: 'Safe and Secure',
      description:
        'Safely store and backup all your essential files. From family photos & videos to important documents, you can rely on us to store all your media securely and forever.',
    },
    {
      icon: '../../../assets/images/little-icon.png',
      title: 'Access from Anywhere',
      description:
        'Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.',
    },
    {
      icon: '../../../assets/images/little-icon.png',
      title: 'Store and Manage All Your Files!',
      description:
        "Upload multiple files at once and keep them forever on this site. If you're using FireFox or Chrome, you can simply drag & drop your files to begin uploading.",
    },
    {
      icon: '../../../assets/images/little-icon.png',
      title: 'Any Point of the Globe',
      description:
        'Speed from any location with internet connection. Benefit from high-speed networking and high-performance server.',
    },
  ];
}
