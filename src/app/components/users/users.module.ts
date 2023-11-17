import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { HomeUserComponent } from './home-user/home-user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailUserComponent } from './details-user/details-user.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUsersComponent } from './list-users/list-users.component';

@NgModule({
  declarations: [
    HomeUserComponent,
    DetailUserComponent,
    EditUserComponent,
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
