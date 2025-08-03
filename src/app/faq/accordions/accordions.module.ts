import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionsComponent } from '@app/faq/accordions/accordions.component';

@NgModule({
  declarations: [AccordionsComponent],
  exports: [AccordionsComponent],
  imports: [CommonModule],
})
export class AccordionsModule {}
