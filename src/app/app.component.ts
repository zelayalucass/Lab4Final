import { Component, OnInit } from '@angular/core';
import { Showtime } from './core/Models';
import { ShowtimeService } from './core/services/showtime.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CineMaster Plus+';
  listaFunciones : Showtime[] = []
  constructor(private showtimeService : ShowtimeService){}

  ngOnInit(): void {
      this.showtimeService.getShowtimes().subscribe((data : any )=>{
        this.listaFunciones = data
        this.listaFunciones.forEach( s => {
          this.eliminarFuncionesRealizadas(s);
        })
      })
  }

  eliminarFuncionesRealizadas(dato : Showtime)
  {
    var fechaActual = new Date().toLocaleDateString()
    var horaActual = `${new Date().getHours()}:${new Date().getMinutes()}`
    var fechaFuncion = new Date(dato.fecha).toLocaleDateString()
    console.log(fechaActual >= fechaFuncion)
    console.log(fechaActual >= fechaFuncion)

    if ( fechaActual >= fechaFuncion &&  fechaActual >= fechaFuncion)
    {
      this.showtimeService.deleteShowtime(dato.id!).subscribe(
        {
          next: (res) => {
            if(res)
            {
            }
          },
          error: () => alert("No se pudo Eliminar")
        }
      )
    }
  }
}
