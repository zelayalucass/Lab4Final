import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-not-login',
  templateUrl: './nav-bar-not-login.component.html',
  styleUrls: ['./nav-bar-not-login.component.css']
})
export class NavBarNotLoginComponent {

  constructor(private router:Router)
  {

  }

  public InitSession()
  {
      this.router.navigate(['/login']);
  }
}
