import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeShowtimeComponent } from './home-showtime/home-showtime.component';
import { AddShowtimeComponent } from './add-showtime/add-showtime.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeShowtimeComponent
  },
  {
    path: "add",
    component: AddShowtimeComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowtimeRoutingModule { }
