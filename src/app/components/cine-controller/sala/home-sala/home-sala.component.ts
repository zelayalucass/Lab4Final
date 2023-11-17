import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Cinema, Sala } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { SalaService } from 'src/app/core/services/sala.service';
import { EditSalaComponent } from '../edit-sala/edit-sala.component';
import { MatDialog } from '@angular/material/dialog';
import { CinemaService } from 'src/app/core/services/cinema.service';

@Component({
  selector: 'app-home-sala',
  templateUrl: './home-sala.component.html',
  styleUrls: ['./home-sala.component.css']
})
export class HomeSalaComponent implements OnInit {

  eliminadoConExito = false;
  isUserLoggedIn: boolean = false;
  cineId: number | null;
  listaSalas: Sala[] = [];

  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserIdInLocalStorage();
    this.api.cineId$.subscribe((cine) => {
      if(cine!=null)
      {
        this.cineId = cine;
      }
      else
      {
        const stringId = localStorage.getItem('cineId');
        const cineIdNumber = Number(stringId) || 0
        this.cineId = cineIdNumber;
      }
      this.getSalasByIdCine();
    })
  }

  constructor(private auth:AuthService,public sala:SalaService,private api:ApiService,private dialog:MatDialog, private cine:CinemaService){
    this.cineId = null;
  }

  public async getSalasByIdCine()
  {
    try
    {
        let apiResponde = this.sala.getSalaByCinema(this.cineId!);       
        let data = await lastValueFrom(apiResponde);
        this.listaSalas = data.map((sala : any) => new Sala(sala))
    }
    catch(error)
   {
      console.log(error);
      
    }
  }

public async DeteleSala(id:number)
{
  /*this.sala.deleteSala(id).subscribe(
    {
      next: (res) => {
        if(res)
        {
          this.getSalasByIdCine();
          alert("Eliminado con exito");
          this.eliminadoConExito = true;
        }
        else
        {
          alert("No se pudo Eliminar");
          this.eliminadoConExito = false;
        } 
      },
      error: () => alert("No se pudo Eliminar")
    }
  )
  


  if(await this.eliminadoConExito)
  {

    const apiResponse = this.cine.getCinemaById(this.cineId!);
    const data = await lastValueFrom(apiResponse);

    if(data != null)
    {
      data.cantidadSalas! -= 1; 
    }

    this.cine.editCinema(data.id!,data).subscribe(
      {
        next: () =>  alert( `Se modifico la cantidad de salas en el cine ${data.nombre!} `),
        error: () => alert(`Error al modficar la cantidad de salas en el cine ${data.nombre!} `)
      }
    )
  }*/
  try {
    const res = await this.sala.deleteSala(id).toPromise();

    if (res) {
      await this.getSalasByIdCine();
      alert("Eliminado con éxito");
      this.eliminadoConExito = true;
    } else {
      alert("No se pudo Eliminar");
      this.eliminadoConExito = false;
    }

    if (this.eliminadoConExito) {
      const apiResponse = await this.cine.getCinemaById(this.cineId!).toPromise();
      const data = apiResponse;

      if (data != null) {
        data.cantidadSalas! -= 1;
        try {
          await this.cine.editCinema(data.id!, data).toPromise();
          alert(`Se modificó la cantidad de salas en el cine ${data.nombre!}`);
        } 
        catch (error) {
          alert(`Error al modificar la cantidad de salas en el cine ${data.nombre!}`);
        }
      }


    }
  } 
     
catch (error) {
    alert("Error al eliminar la sala");
  }
}

public EditSala(sala:Sala)
{
    const dialogResult = this.dialog.open(EditSalaComponent, {data : sala, height: '450px', width:'460px'})

    dialogResult.afterClosed().subscribe(
      result => this.getSalasByIdCine()
    )
}



}
