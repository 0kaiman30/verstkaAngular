import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '@app/profile/profile.component';
import { ButtonModule } from '@app/shared/button/button.module';
import { DigitsSectionModule } from '@app/shared/digits-section/digits-section.module';
import { FormsModule } from '@angular/forms';
import { ProfileRoutingModule } from '@app/profile/profile-routing.module';

@NgModule({
  declarations: [ProfileComponent],
  exports: [ProfileComponent],
  imports: [CommonModule, ButtonModule, DigitsSectionModule, FormsModule, ProfileRoutingModule],
})
export class ProfileModule {}
