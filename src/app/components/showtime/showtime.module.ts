import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowtimeRoutingModule } from './showtime-routing.module';
import { ShowtimeListComponent } from './showtime-list/showtime-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeShowtimeComponent } from './home-showtime/home-showtime.component';
import { AddShowtimeComponent } from './add-showtime/add-showtime.component';
import { EditShowtimeComponent } from './edit-showtime/edit-showtime.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { LandingModule } from '../landing/landing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


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
    MatButtonModule,FormsModule,MatTooltipModule,MatDatepickerModule,MatNativeDateModule,
    MatCardModule,MatInputModule,MatFormFieldModule,MatListModule,LandingModule,MatSelectModule,MatIconModule]
})
export class ShowtimeModule { }
