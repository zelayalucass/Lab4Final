import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeShowtimeComponent } from './home-showtime/home-showtime.component';
import { AddShowtimeComponent } from './add-showtime/add-showtime.component';
import { AuthGuard } from '../guards/auth-guard.service';

const routes: Routes = [
  {
    path:"home",
    component:HomeShowtimeComponent
  },
  {
    path: "add",
    component: AddShowtimeComponent,canActivate: [AuthGuard],  data: { requiredRole: 'admin' }
  },
  {
    path:"add/:id",
    component:AddShowtimeComponent,canActivate: [AuthGuard],  data: { requiredRole: 'admin' }
  },
  {
    path: '',
    redirectTo:'home',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowtimeRoutingModule { }
