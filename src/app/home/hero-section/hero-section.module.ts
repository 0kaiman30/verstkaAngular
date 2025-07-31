import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '@app/home/hero-section/hero-section.component';
7;
@NgModule({
  declarations: [HeroSectionComponent],
  exports: [HeroSectionComponent],
  imports: [CommonModule],
})
export class HeroSectionModule {}
