import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent {
  isUserLoggedIn: boolean = false;
  constructor(private auth: AuthService) {}
  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserIdInLocalStorage();
  }
}
