import { NgModule } from '@angular/core';
import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing-page/landing-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarruselComponent } from './carrusel/carrusel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CardMovieComponent } from './card-movie/card-movie.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AuthModule } from '../auth/auth.module';
@NgModule({
    declarations: [
        LandingComponent,
        CarruselComponent,
        CardMovieComponent
    ],
    imports: [
        CommonModule,
        LandingRoutingModule,
        SharedModule,
        CarouselModule,
        MatButtonModule,
        MatCardModule,
        AuthModule
    ]
})
export class LandingModule { }
