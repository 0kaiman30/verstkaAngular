import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitsSectionComponent } from '@app/shared/digits-section/digits-section.component';

@NgModule({
  declarations: [DigitsSectionComponent],
  exports: [DigitsSectionComponent],
  imports: [CommonModule],
})
export class DigitsSectionModule {}
