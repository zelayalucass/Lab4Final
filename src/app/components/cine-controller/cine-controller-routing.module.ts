import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCineComponent } from './cine/home-cine/home-cine.component';
import { AddCineComponent } from './cine/add-cine/add-cine.component';
import { LoginComponent } from '../auth/login/login.component';
import { HomeSalaComponent } from './sala/home-sala/home-sala.component';

const routes: Routes = [
  {
    path: 'home-cine',
    component: HomeCineComponent

  },
  {
    path: 'home-sala',
    component: HomeSalaComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CineControllerRoutingModule { }
