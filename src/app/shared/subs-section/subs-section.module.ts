import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubsSectionComponent } from '@app/shared/subs-section/subs-section.component';

@NgModule({
  declarations: [SubsSectionComponent],
  exports: [SubsSectionComponent],
  imports: [CommonModule],
})
export class SubsSectionModule {}
