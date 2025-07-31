import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Shell } from '@app/shell/shell.service';
import { PricingComponent } from '@app/pricing/pricing.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'pricing', component: PricingComponent, data: { title: marker('Pricing') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class PricingRoutingModule {}
