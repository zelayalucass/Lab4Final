import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Movie, Sala, Showtime } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';
import { MovieService } from 'src/app/core/services/movie.service';
import { SalaService } from 'src/app/core/services/sala.service';
import { ShowtimeService } from 'src/app/core/services/showtime.service';

@Component({
  selector: 'app-add-showtime',
  templateUrl: './add-showtime.component.html',
  styleUrls: ['./add-showtime.component.css']
})

export class AddShowtimeComponent implements OnInit{
  public movieList: Movie[] = [];
  public salasList: Sala[] = [];
  public salaName : string =""
  public viewSalas : boolean = false
  public showtimeRegister: Showtime = new Showtime();
  public horarios = this.generarHorarios();
  
  public horarioSeleccionado: string = '';
  public loginForm!:FormGroup;
  isUserLoggedIn: boolean = false;
  isUpdate : boolean = false;

  constructor(private route: ActivatedRoute,private api:ShowtimeService,private auth:AuthService
     , private movieServie:MovieService,private salaService : SalaService) {}
     
  ngOnInit(): void {

    this.salaService.getSalas().subscribe((data : any)=> {
      this.salasList = data;
    });
    this.movieServie.listaPeliculas$.subscribe((lista)=>
    {
      this.movieList = lista.slice(0,10);
    });

    this.route.params.subscribe(params => {
      
    var id = parseInt(params['id']);
      this.api.getShowtimeById(id).subscribe((data : Showtime ) => 
      {
        this.isUpdate=true;
        this.showtimeRegister = data;
        this.horarioSeleccionado = data.horarios != null ? data.horarios : ""

        var sala = this.salasList.filter(s =>s.id === data.sala!)
        this.setSala(sala[0])
      })
    });
    this.isUserLoggedIn = this.auth.isUserIdInLocalStorage();
    };

    setTitle(movie : Movie)
    {
      this.showtimeRegister.nombrePelicula = movie.title;
      this.showtimeRegister.idPelicula = movie.id;
    }
    setSala(sala : Sala)
    {
      this.showtimeRegister.sala = sala.id;
      this.showtimeRegister.entradasDisponible = sala.butacas;
      this.salaName = sala.nombreSala != undefined ? sala.nombreSala : ""
    }

    onInputFocus(see : boolean) {
      this.viewSalas = see;
    }

    generarHorarios(): any[] {
      const horarios = [];
      for (let hora = 16; hora <= 23; hora++) {
        const horario24 = `${hora}:00`;
        horarios.push({ value: horario24, viewValue: horario24 });
      }
      return horarios;
    }

    public registerShowtime()
    {
      try
      {
        if(this.showtimeRegister.sala != null && this.showtimeRegister.idPelicula != null && this.showtimeRegister.horarios!=null){
          if(!this.isUpdate)
          {
            this.api.addShowtime(this.showtimeRegister).subscribe(
              {
                next:() =>{
                  alert("Funcion creado con exito");
                },
                error: (error) => {
                  console.log(error);
                  alert("No se pudo crear la funcion");
                }
              }
            )
          }else{

            this.api.editShowtime(this.showtimeRegister.id!,this.showtimeRegister).subscribe(
              {
                next:() =>{
                  alert("Funcion modificada con exito");
                },
                error: (error) => {
                  console.log(error);
                  alert("No se modificar la funcion");
                }
              }
            )
          }
          
        }else{
          alert("Rellene todos los campos ");
        }
        
      }catch(error)
      { 
        console.log(error);   
      }
      
    }

    setHorario()
    {
      this.showtimeRegister.horarios = this.horarioSeleccionado
    }

    cancel()
    {
      this.showtimeRegister = new Showtime();
      this.salaName =  ""
      this.horarioSeleccionado = ""
    }

    

}
