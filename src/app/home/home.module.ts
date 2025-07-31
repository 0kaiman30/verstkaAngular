import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Angulartics2Module } from 'angulartics2';
import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroSectionModule } from '@app/home/hero-section/hero-section.module';
import { InfoSectionModule } from '@app/home/info-section/info-section.module';
import { SubsSectionModule } from '@app/shared/subs-section/subs-section.module';
import { DigitsSectionModule } from '@app/shared/digits-section/digits-section.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    Angulartics2Module,
    HomeRoutingModule,
    HeroSectionModule,
    InfoSectionModule,
    SubsSectionModule,
    DigitsSectionModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
