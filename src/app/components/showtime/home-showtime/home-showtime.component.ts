import { Component} from '@angular/core';
import { Showtime } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home-showtime',
  templateUrl: './home-showtime.component.html',
  styleUrls: ['./home-showtime.component.css']
})
export class HomeShowtimeComponent {
  isUserLoggedIn: boolean = false;
  public funciones: Array<Showtime> = [];

  constructor(private auth: AuthService) {}
 
  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserIdInLocalStorage();
  }

}
