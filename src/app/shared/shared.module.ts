import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { NavBarNotLoginComponent } from './nav-bar-not-login/nav-bar-not-login.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavBarNotLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    FooterComponent,
    NavBarNotLoginComponent
  ]
})
export class SharedModule { }
