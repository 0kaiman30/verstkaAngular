import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '@app/register/register.component';
import { RegisterRoutingModule } from '@app/register/register-routing.module';
import { ButtonModule } from '@app/shared/button/button.module';
import { FormsModule } from '@angular/forms';
import { DigitsSectionModule } from '@app/shared/digits-section/digits-section.module';

@NgModule({
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
  imports: [CommonModule, RegisterRoutingModule, ButtonModule, FormsModule, DigitsSectionModule],
})
export class RegisterModule {}
