import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '@app/login/login.component';
import { LoginRoutingModule } from '@app/login/login-routing.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@app/shared/button/button.module';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, FormsModule, ButtonModule],
})
export class LoginModule {}
