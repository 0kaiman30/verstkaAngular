import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { DigitsSectionModule } from '@app/shared/digits-section/digits-section.module';
import { DropALineModule } from '@app/contact/drop-a-line/drop-a-line.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    ContactRoutingModule,
    DigitsSectionModule,
    DropALineModule,
  ],
  declarations: [ContactComponent],
})
export class ContactModule {}
