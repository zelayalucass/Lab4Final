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
  constructor(private auth: AuthService, private apiCine:CinemaService, private api:ApiService)
  {
    this.getCines();
  }
  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserIdInLocalStorage();
  }

  public async getCines()
  {
    try
    {
        let apiResponde = this.apiCine.getCinemas();
       
        let data = await lastValueFrom(apiResponde);
        
        this.cines = data.map((cine : any) => new Cinema(cine))
        
    }
    catch(error)
    {
      console.log(error);
    }
  }

public DeteleCine(id:number)
{
  this.apiCine.deleteCinema(id).subscribe(
    {
      next: (res) => {
        debugger
        console.log(res);
        
        if(res)
        {
          this.getCines();
          alert("Eliminado con exito");
        }
        else
        {
          alert("No se pudo Eliminar");
        } 
      },
      error: () => alert("No se pudo Eliminar")
    }
  )
}


}
