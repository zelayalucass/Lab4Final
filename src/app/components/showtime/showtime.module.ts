import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowtimeRoutingModule } from './showtime-routing.module';
import { ShowtimeListComponent } from './showtime-list/showtime-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ShowtimeListComponent,
  ],
  imports: [
    CommonModule,
    ShowtimeRoutingModule,
    SharedModule
  ]
})
export class ShowtimeModule { }
