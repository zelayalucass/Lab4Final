import { NgModule,Component,ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing-page/landing-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarruselComponent } from './carrusel/carrusel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CardMovieComponent } from './card-movie/card-movie.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { SearchComponent } from './search/search.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FilterComponent } from './filter/filter.component';
import { AuthModule } from '../auth/auth.module';
@NgModule({
    declarations: [
        LandingComponent,
        CarruselComponent,
        CardMovieComponent,
        SearchComponent,
        FilterComponent
    ],
    imports: [
        CommonModule,
        LandingRoutingModule,
        SharedModule,
        CarouselModule,
        MatButtonModule,
        MatCardModule,
        FormsModule,
        MatFormFieldModule, MatInputModule, MatSelectModule,MatIconModule,MatTooltipModule,
        AuthModule
    ]
})
export class LandingModule { }
