import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { NavBarNotLoginComponent } from './nav-bar-not-login/nav-bar-not-login.component';
import { NavBarLoginComponent } from './nav-bar-login/nav-bar-login.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavBarNotLoginComponent,
    NavBarLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    FooterComponent,
    NavBarNotLoginComponent,
    NavBarLoginComponent
  ]
})
export class SharedModule { }
