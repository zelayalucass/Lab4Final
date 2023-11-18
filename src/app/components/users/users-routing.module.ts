import { HomeUserComponent } from './home-user/home-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailUserComponent } from './details-user/details-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeUserComponent
  },
  {
    path:"details",
    component:DetailUserComponent
  },
  {
    path:"edit",
    component:EditUserComponent
  }
  ,
  {
    path:"list",
    component:ListUsersComponent
  },
  {
    path: '',
    redirectTo:'details',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
