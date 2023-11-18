import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie, Sala, Showtime, Ticket } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';
import { MovieService } from 'src/app/core/services/movie.service';
import { SalaService } from 'src/app/core/services/sala.service';
import { ShowtimeService } from 'src/app/core/services/showtime.service';
import { TicketService } from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit{

  public cantAComprar : number = 0;
  public idFuncion : number = 0;
  isUserLoggedIn: boolean = false;
  public funcion : Showtime = new Showtime()
  public movie : Movie = new Movie()
  public sala : Sala = new Sala()

 constructor(private auth: AuthService,private router : ActivatedRoute, private navigate : Router,private movieService : MovieService,
  private showtimeService: ShowtimeService, private salaService : SalaService, private ticketService : TicketService){}

  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserIdInLocalStorage();
    
    this.router.params.subscribe(params => {
      this.idFuncion = parseInt(params['id']);
    });
    
    this.showtimeService.getShowtimeById(this.idFuncion).subscribe((data: Showtime) =>{
      this.setFuncion(data)
    })
  }

  setFuncion(dato : Showtime)
  {
    this.funcion = dato
    var idSala = this.funcion.sala!
    var idPeli = this.funcion.idPelicula!
    this.salaService.getSalaById(idSala).subscribe((data:any)=> {
      this.setSala(data)
    }) 

    this.movieService.getMovieById(idPeli).subscribe((data : any) =>
    {
      this.setMovie(data);
    })
  }

  setSala(dato : Sala)
  {
    this.sala = dato;
  }

  setMovie(dato : Movie)
  {
    this.movie = dato;
  }

  gotToInicio()
  {
    this.navigate.navigate(['/showtime/home']);
  }

  grabarCompra()
  {
    let ticket = new Ticket()
    if(this.cantAComprar <= this.funcion.entradasDisponible! && this.cantAComprar > 0)
    {
      ticket.cantidadEntradas = this.cantAComprar
      ticket.idFuncion = this.idFuncion;
      ticket.idUsuario = parseInt(localStorage.getItem('userId')!);
      ticket.fecha = this.funcion.fecha //conjugacion fecha + horario
      ticket.nombrePelicula = this.movie.title
      
      this.ticketService.addTicket(ticket).subscribe(
        {
          next: (res) => {
            console.log(res)
  
            if(res)
            {
              var entradasDisp = this.funcion.entradasDisponible! - this.cantAComprar
              this.funcion.entradasDisponible  = entradasDisp
              this.showtimeService.editShowtime(this.idFuncion, this.funcion).subscribe(
                {
                  next:() =>{
                    alert("¡ Ticket adquirido con exito !");
                    this.gotToInicio();
                  },
                  error: (error) => {
                    console.log(error);
                    alert("No se modificar la funcion");
                  }
                }
              )
            }
            else
            {
              alert("Error al obtener el ticket");
            } 
          },
          error: () =>  alert("Error al obtener el ticket")
        }
      )      
    }else{
      alert("Cantidad a comprar no valida");
    }
  }

  getTotal() : number
  {
    var rta = this.funcion.precio! * this.cantAComprar
    return !isNaN(rta) ? rta : 0
  }

}
