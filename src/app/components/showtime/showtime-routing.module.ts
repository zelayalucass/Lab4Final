import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeShowtimeComponent } from './home-showtime/home-showtime.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeShowtimeComponent
  },
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowtimeRoutingModule { }
