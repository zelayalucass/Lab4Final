import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCineComponent } from './list-cine/list-cine.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListCineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CineRoutingModule { }
