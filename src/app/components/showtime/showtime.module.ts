import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowtimeRoutingModule } from './showtime-routing.module';
import { ShowtimeListComponent } from './showtime-list/showtime-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeShowtimeComponent } from './home-showtime/home-showtime.component';
import {MatTable, MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    ShowtimeListComponent,
    HomeShowtimeComponent,
  ],
  imports: [
    CommonModule,
    ShowtimeRoutingModule,
    SharedModule,
    MatTableModule,MatTable
  ]
})
export class ShowtimeModule { }
