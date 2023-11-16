import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Cinema, Sala } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { SalaService } from 'src/app/core/services/sala.service';
import { EditSalaComponent } from '../edit-sala/edit-sala.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home-sala',
  templateUrl: './home-sala.component.html',
  styleUrls: ['./home-sala.component.css']
})
export class HomeSalaComponent implements OnInit {

  isUserLoggedIn: boolean = false;
  cineId: number | null;
  listaSalas: Sala[] = [];

  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserIdInLocalStorage();
    this.api.cineId$.subscribe((cine) => {

      this.cineId = cine;
      this.getSalasByIdCine();
    })
  }

  constructor(private auth:AuthService,public sala:SalaService,private api:ApiService,private dialog:MatDialog){
    this.cineId = null;
  }

  public async getSalasByIdCine()
  {
    try
    {
        debugger;
        let apiResponde = this.sala.getSalaByCinema(this.cineId!);       
        let data = await lastValueFrom(apiResponde);
        this.listaSalas = data.map((sala : any) => new Sala(sala))
    }
    catch(error)
   {
      console.log(error);
      
    }
  }

  public DeteleSala(id:number)
{
  this.sala.deleteSala(id).subscribe(
    {
      next: (res) => {
        debugger
        console.log(res);
        
        if(res)
        {
          this.getSalasByIdCine();
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

public EditSala(sala:Sala)
{
    const dialogResult = this.dialog.open(EditSalaComponent, {data : sala, height: '450px', width:'460px'})

    dialogResult.afterClosed().subscribe(
      result => this.getSalasByIdCine()
    )
}



}
