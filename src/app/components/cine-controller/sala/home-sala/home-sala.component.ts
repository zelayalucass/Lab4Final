import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home-sala',
  templateUrl: './home-sala.component.html',
  styleUrls: ['./home-sala.component.css']
})
export class HomeSalaComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserIdInLocalStorage();
  }

  constructor(private auth:AuthService){}

}
