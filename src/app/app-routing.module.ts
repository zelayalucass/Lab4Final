import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './standalone/error404/error404.component';
import { LoginGuard } from './components/guards/login-guard.service';
import { AuthGuard } from './components/guards/auth-guard.service';


const routes: Routes = [
  {
    path:'landing',
    loadChildren:()=> import("./components/landing/landing.module").then(m=>m.LandingModule)
  },
  {
    path:'auth',
    loadChildren: ()=> import("./components/auth/auth-routing.module").then(m=>m.AuthRoutingModule),  canActivate:[LoginGuard]
  },
  {
    path:'showtime',
    loadChildren: ()=> import("./components/showtime/showtime.module").then(m=>m.ShowtimeModule), canActivate: [AuthGuard],  data: { requiredRole: 'user' },
  },
  {
    path:'showtimeLanding',
    loadChildren: ()=> import("./components/showtime/showtime.module").then(m=>m.ShowtimeModule)
  },
  {
    path:'showtimeAdmin',
    loadChildren: ()=> import("./components/showtime/showtime.module").then(m=>m.ShowtimeModule), canActivate: [AuthGuard],  data: { requiredRole: 'admin' },
  },
  {
    path:'cine',
    loadChildren: ()=> import("./components/cine-controller/cine-controller.module").then(m=>m.CineControllerModule), canActivate: [AuthGuard],  data: { requiredRole: 'admin' }
    
  },
  {
    path:'user',
    loadChildren: ()=> import("./components/users/users.module").then(m=>m.UsersModule), canActivate: [AuthGuard], data: { requiredRole: 'user' }
  },
  {
    path:'admin',
    loadChildren: ()=> import("./components/users/users.module").then(m=>m.UsersModule), canActivate: [AuthGuard], data: { requiredRole: 'admin' }
  },
  {
    path:'ticket',
    loadChildren: ()=> import("./components/ticket-controller/ticket-controller.module").then(m=>m.TicketControllerModule), canActivate: [AuthGuard], data: { requiredRole: 'user' }
  },
  {
    path: '',
    redirectTo:'landing',
    pathMatch: 'full'
  },
  {
    path:'**',
    component: Error404Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
