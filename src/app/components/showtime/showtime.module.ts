import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowtimeRoutingModule } from './showtime-routing.module';
import { ShowtimeListComponent } from './showtime-list/showtime-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeShowtimeComponent } from './home-showtime/home-showtime.component';
import { AddShowtimeComponent } from './add-showtime/add-showtime.component';
import { EditShowtimeComponent } from './edit-showtime/edit-showtime.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import { LandingModule } from '../landing/landing.module';
import { SearchComponent } from '../landing/search/search.component';
import { LandingRoutingModule } from '../landing/landing-routing.module';

@NgModule({
  declarations: [
    ShowtimeListComponent,
    HomeShowtimeComponent,
    AddShowtimeComponent,
    EditShowtimeComponent,
  ],
  imports: [
    CommonModule,
    ShowtimeRoutingModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,MatInputModule,MatFormFieldModule,MatListModule,LandingModule]
})
export class ShowtimeModule { }
