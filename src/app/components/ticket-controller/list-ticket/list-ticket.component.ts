import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { Showtime, Ticket } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { ShowtimeService } from 'src/app/core/services/showtime.service';
import { TicketService } from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit{
  isUserLoggedIn: any;
  auth: any;
  currentDate: Date = new Date();
  idUser: any;
  

  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserIdInLocalStorage();
    this.idUser = localStorage.getItem('idUser') == "true" ? true : false;
    this.getTickets();
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  constructor(private api:ApiService, private dialog: MatDialog, public ticketService:TicketService, public showtimeService:ShowtimeService) 
  {
    this.currentDate = new Date();    
   }

  @Input() listaTickets:Array<Ticket> = [];
  @Output() ticketToEdit: EventEmitter<Ticket> = new EventEmitter();

  isLoadingResults = true;

  public CountList() : number
  {
    return this.listaTickets.length;
  }

  parseDate(dateString: Date | null): number {
    if (dateString === null) {
      return 0; // Otra acción apropiada si la fecha es nula
    }
  
    // Obtén solo la fecha (sin la hora) para hacer la comparación
    const dateOnly = new Date(
      dateString.getFullYear(),
      dateString.getMonth(),
      dateString.getDate(),
      dateString.getHours(),
      dateString.getMinutes()
    );
  
    return dateOnly.getTime();
  }
  
  compareDates(itemFecha: Date | null): boolean {
    if (itemFecha === null) {
      return false; // Otra acción apropiada si la fecha es nula
    }
    // Convierte las cadenas de fecha a objetos Date
    const fechaItem = new Date(itemFecha);
    const fechaOtra = new Date(this.currentDate);
    // Compara las fechas
    if (fechaItem < fechaOtra) {
        return true; // itemFecha es menor que otraFecha
    }
     else {
        return false; // Las fechas son iguales
    }
}

  public async getTickets()
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
              this.ticketService.getTickets
              console.log("Eliminado con exito");
            }
            else
            {
              console.log("No se pudo Eliminar");
            } 
          },
          error: () => console.log("No se pudo Eliminar")
        }
      );
      this.getTickets();
    }
  }
}
