import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from '@app/faq/faq.component';
import { DigitsSectionModule } from '@app/shared/digits-section/digits-section.module';
import { FaqRoutingModule } from '@app/faq/faq-routing.module';
import { AccordionsModule } from '@app/faq/accordions/accordions.module';

@NgModule({
  declarations: [FaqComponent],
  exports: [FaqComponent],
  imports: [CommonModule, DigitsSectionModule, FaqRoutingModule, AccordionsModule],
})
export class FaqModule {}
