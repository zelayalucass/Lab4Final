import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { NavBarNotLoginComponent } from './shared/nav-bar-not-login/nav-bar-not-login.component';
import { FooterComponent } from './shared/footer/footer.component'
import { AuthRoutingModule } from './components/auth/auth-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './components/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD

=======
>>>>>>> a36cdf0f337d7a1957bc6449b8694f4665686018

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    AuthModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
