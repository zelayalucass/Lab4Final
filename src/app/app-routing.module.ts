import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingModule } from './components/landing/landing.module';
import { LoginComponent } from './components/auth/login/login.component';
import { Error404Component } from './standalone/error404/error404.component';



const routes: Routes = [
  {
    path:'landing',
    loadChildren:()=> import("./components/landing/landing.module").then(m=>m.LandingModule)
  },
  {
    path:'auth',
    loadChildren: ()=> import("./components/auth/auth-routing.module").then(m=>m.AuthRoutingModule)
  },
  {
    path:'cine',
    loadChildren: ()=> import("./components/cine-controller/cine-controller.module").then(m=>m.CineControllerModule)
    
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
