import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing-page/landing-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarruselComponent } from './carrusel/carrusel.component';

@NgModule({
  declarations: [
    LandingComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
  ]
})
export class LandingModule { }
