import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCineComponent } from './cine/home-cine/home-cine.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeCineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CineControllerRoutingModule { }
