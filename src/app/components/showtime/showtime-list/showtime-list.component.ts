import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sala, Showtime } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { ShowtimeService } from 'src/app/core/services/showtime.service';
import { SalaService } from 'src/app/core/services/sala.service';
import { TicketService } from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-showtime-list',
  templateUrl: './showtime-list.component.html',
  styleUrls: ['./showtime-list.component.css']
})

export class ShowtimeListComponent implements OnInit{

  isUserLoggedIn: boolean = false;
  isAdmin: boolean = false;
  listShows : Showtime[] = []
  public funcionBuscada : string = '';

  constructor(private auth: AuthService, private router:Router, private showtimeService : ShowtimeService, private ticketService : TicketService) {}

  ngOnInit(): void {
    this.isAdmin = localStorage.getItem('isAdmin') == "true" ? true : false;
    this.isUserLoggedIn = this.auth.isUserIdInLocalStorage();
    this.getFunciones()
  }

  public NavigateToAdd()
  {
    this.router.navigate(['showtimeAdmin', 'add']);
  }

  public getFunciones()
  {
    this.showtimeService.getShowtimes().subscribe((list : any )=> {
      this.listShows = list
    })
  }

  public DeleteShowtime(id:number)
  {
    var existeTicket = false;
    this.ticketService.getTicketsByIdFuncion(id).subscribe((data :any) => {
      existeTicket = data[0] != null ? true : false;  
      console.log(data)
      if(!existeTicket)
      {
        this.showtimeService.deleteShowtime(id).subscribe(
          {
            next: (res) => {
              if(res)
              {
                this.getFunciones()
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
      }else{
        alert("Existen tickets, no puede eliminar esta funcion");
      }
    })
      
  }

  public CountList() : number
  {
    return this.listShows.length;
  }

  public EditCine(showtime :Showtime)
  {
    this.router.navigate(['/showtimeAdmin/add', showtime.id]);
  }

  public goToAddTicket(showtime :Showtime)
  {
    var fechaActual = new Date().toLocaleDateString()
    var horaActual = `${new Date().getHours()}:${new Date().getMinutes()}`
   

    if ( fechaActual <= showtime.fecha!) { //VALIDACION PARA NO COMPRAR TICKETS DE FUNCIONES QUE YA PASARON
      if(this.isUserLoggedIn)
      {
        this.router.navigate(['/ticket/add', showtime.id]);
      }else{
        this.router.navigate(['/auth/login']);
      }  
    }else if ( fechaActual == showtime.fecha && horaActual <= showtime.horarios! )
    {
      if(this.isUserLoggedIn)
      {
        this.router.navigate(['/ticket/add', showtime.id]);
      }else{
        this.router.navigate(['/auth/login']);
      }  
    }else{
      alert("¡ La funcion ya se realizo !")
    }
    
  }

  public onInputChange()
  {
    // Filtra las funciones que contienen la palabra buscada
    if(this.funcionBuscada == ""){
      this.getFunciones()
    }else
    {
      this.listShows = this.listShows.filter(funcion => {
        // Convierte la función a cadena y busca la palabra
        return funcion.nombrePelicula!.toLowerCase().includes(this.funcionBuscada.toLowerCase());
        });
    }
    
  }
  
}
