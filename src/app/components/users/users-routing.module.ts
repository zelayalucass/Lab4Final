import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsUserComponent } from './details-user/details-user.component';

const routes: Routes = [
  {
    path:"details",
    component:DetailsUserComponent
  },
  {
    path:"",
    redirectTo:"details",
    pathMatch:"full"  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
