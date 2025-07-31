import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DropALineComponent } from './drop-a-line.component';
import { ButtonModule } from '@app/shared/button/button.module';

@NgModule({
  declarations: [DropALineComponent],
  imports: [CommonModule, FormsModule, MatButtonModule, ButtonModule],
  exports: [DropALineComponent],
})
export class DropALineModule {}
