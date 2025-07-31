import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingRoutingModule } from '@app/pricing/pricing-routing.module';
import { PricingComponent } from '@app/pricing/pricing.component';
import { MaterialModule } from '@app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@shared';
import { SubsSectionModule } from '@app/shared/subs-section/subs-section.module';
import { DigitsSectionModule } from '@app/shared/digits-section/digits-section.module';

@NgModule({
  declarations: [PricingComponent],
  imports: [
    MaterialModule,
    PricingRoutingModule,
    FlexLayoutModule,
    SharedModule,
    CommonModule,
    SubsSectionModule,
    DigitsSectionModule,
  ],
})
export class PricingModule {}
