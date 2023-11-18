import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sala, Showtime } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { ShowtimeService } from 'src/app/core/services/showtime.service';
import { SalaService } from 'src/app/core/services/sala.service';

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

  constructor(private auth: AuthService, private router:Router, private showtimeService : ShowtimeService, private salaService : SalaService) {}

  ngOnInit(): void {
    this.isAdmin = localStorage.getItem('isAdmin') == "true" ? true : false;
    console.log(this.isAdmin)
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
    this.showtimeService.deleteShowtime(id).subscribe(
      {
        next: (res) => {
          console.log(res)

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
    if(this.isUserLoggedIn)
    {
      this.router.navigate(['/ticket/add', showtime.id]);
    }else{
      this.router.navigate(['/auth/login']);
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
