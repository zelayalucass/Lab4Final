import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { Showtime, Ticket } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ShowtimeService } from 'src/app/core/services/showtime.service';
import { TicketService } from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit{
  isUserLoggedIn: boolean = false;
  currentDate: Date = new Date();
  idUser: number = 0;
  isLoadingResults = true;
  
  listaTickets:Array<Ticket> = [];

  constructor(public ticketService:TicketService, public showtimeService:ShowtimeService, private auth:AuthService, private router: Router) {}

   ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserIdInLocalStorage();
    this.idUser = parseInt(localStorage.getItem('userId')!);

    this.getTickets();
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }


  public CountList() : number
  {
    return this.listaTickets.length;
  }
  
  compareDates(itemFecha: string | null): boolean 
  {  
    if (itemFecha === null) {
      console.log("La fecha es nula.");
      return false;
    }
    const partesFecha = itemFecha.split('/');
    const dia = parseInt(partesFecha[0], 10);
    const mes = parseInt(partesFecha[1], 10) - 1; // Restamos 1 al mes porque en TS los meses van de 0 a 11
    const año = parseInt(partesFecha[2], 10);
  
    const fechaProporcionada = new Date(año, mes, dia);
    if (fechaProporcionada > this.currentDate) {
      return true;
    } 
    else {
      return false;
    }
  }

  public getTickets()
  {
    try
    {
      this.ticketService.getTicketsByUser(this.idUser).subscribe((data: any)=>{ 
        this.listaTickets = data;
      });
    }
    catch(error){}
  }

  public async DevolverTicket(ticketDevuelto: Ticket | null)
  {
    if(ticketDevuelto !== null){

      const confirmacion = window.confirm("¿Desea devolver el ticket?");

      if (confirmacion) 
      {
        this.showtimeService.getShowtimeById(ticketDevuelto.idFuncion!).subscribe((data: Showtime)=>{ 
          var funcion = data;
          funcion.entradasDisponible = funcion.entradasDisponible! + ticketDevuelto.cantidadEntradas!;
          console.log(funcion.entradasDisponible)
          this.showtimeService.editShowtime(ticketDevuelto.idFuncion!, funcion).subscribe(
            {
              next: (res) => {
                if(res)
                {
                  console.log("Modificado con exito");
                }
                else
                {
                  console.log("No se pudo Modificar");
                } 
              },
              error: () => console.log("No se pudo Modificar")
            }
          );
        });
        this.ticketService.deleteTicket(ticketDevuelto.id!).subscribe(
          {
            next: (res) => {
              if(res)
              {
                alert("Ticket devuelto con exito");
              }
              else
              {
                console.log("No se pudo Eliminar");
              } 
            },
            error: () => console.log("No se pudo Eliminar")
          }
        );
      }
      this.recargarComponente()
    }
  }

  recargarComponente() {
    // Obtén la ruta actual
    const currentUrl = this.router.url;
    // Navega a sí mismo para recargar el componente
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
