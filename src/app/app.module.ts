import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { NavBarNotLoginComponent } from './shared/nav-bar-not-login/nav-bar-not-login.component';
import { FooterComponent } from './shared/footer/footer.component'
import { AuthRoutingModule } from './components/auth/auth-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './components/auth/auth.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
