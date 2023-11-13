import { Component, OnInit } from '@angular/core';
import { Cinema } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { CinemaService } from 'src/app/core/services/cinema.service';
import {lastValueFrom} from 'rxjs'

@Component({
  selector: 'app-home-cine',
  templateUrl: './home-cine.component.html',
  styleUrls: ['./home-cine.component.css']
})
export class HomeCineComponent implements OnInit {

  public cines: Array<Cinema> = [];

  isUserLoggedIn: boolean = false;
  constructor(private auth: AuthService, private api:CinemaService)
  {
    this.getCines();
  }
  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserIdInLocalStorage();
    this.getCines();
  }

  public async getCines()
  {
    try
    {
        let apiResponde = this.api.getCinemas();
       
        let data = await lastValueFrom(apiResponde);
        
        this.cines = data.map((cine : any) => new Cinema(cine))
        
    }
    catch(error)
    {
      console.log(error);
    }
  }

}
