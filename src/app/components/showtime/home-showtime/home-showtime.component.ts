import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cinema, Showtime } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';
import { ShowtimeService } from 'src/app/core/services/showtime.service';

@Component({
  selector: 'app-home-showtime',
  templateUrl: './home-showtime.component.html',
  styleUrls: ['./home-showtime.component.css']
})
export class HomeShowtimeComponent {
  isUserLoggedIn: boolean = false;
  public funciones: Array<Showtime> = [];

  constructor(private auth: AuthService, private apiFunciones:ShowtimeService, private dialog:MatDialog) {}
 
  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserIdInLocalStorage();
  }

  public async getCines()
  {
    try
    {
      /*
        let apiResponde = this.apiFunciones.getShowtimes();
       
        let data = await lastValueFrom(apiResponde);
        
        this.cines = data.map((cine : any) => new Cinema(cine))
*/        
    }
    catch(error)
    {
      console.log(error);
    }
  }

public DeteleCine(id:number)
{
  this.apiFunciones.deleteShowtime(id).subscribe(
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

public EditCine(cine:Cinema)
{
    /*const dialogResult = this.dialog.open(EditCineComponent, {data : cine, height: '450px', width:'460px'})

    dialogResult.afterClosed().subscribe(
      result => this.getCines()
    )*/
}




}
