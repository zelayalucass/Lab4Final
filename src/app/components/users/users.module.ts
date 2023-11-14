import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { HomeUserComponent } from './home-user/home-user.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeUserComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    //SharedModule
  ]
})
export class UsersModule { }
