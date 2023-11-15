import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  movieList: Movie[] = [];
  salasList: Sala[] = [];
  salaName : string =""
  public viewSalas : boolean = false
  public showtimeRegister: Showtime = new Showtime();

  public loginForm!:FormGroup;
  isUserLoggedIn: boolean = false;
  
  @Output() userToCreate: EventEmitter<Showtime>= new EventEmitter();
  
  constructor(private api:ShowtimeService,private auth:AuthService
     ,private formBuilder:FormBuilder, private movieServie:MovieService,private salaService : SalaService) {}
     
  ngOnInit(): void {

    this.isUserLoggedIn = this.auth.isUserIdInLocalStorage();

    this.salaService.getSalas().subscribe((data : any)=> {
      this.salasList = data;
    });
    console.log(this.salasList);
    this.movieServie.listaPeliculas$.subscribe((lista)=>
    {
      this.movieList = lista.slice(0,10);
    });

    this.loginForm = this.formBuilder.group({
      name: [this.showtimeRegister.nombrePelicula, [Validators.required, Validators.minLength(5)]],
      direction: [this.showtimeRegister.sala, [Validators.required]]
    })};

    setTitle(title : string)
    {
      this.showtimeRegister.nombrePelicula = title;
    }
    setSala(sala : Sala)
    {
      this.showtimeRegister.sala = sala.id;
      this.salaName = sala.nombreSala != undefined ? sala.nombreSala : ""
    }

    onInputFocus(see : boolean) {
      this.viewSalas = see;
      // Realiza las acciones que desees cuando el input reciba el foco
    }
      /*

  public registerCine()
  {
    try
    {
      this.cineRegister.nombre = this.loginForm.get('name')?.value;
      this.cineRegister.direccion = this.loginForm.get('direction')?.value;
      this.cineRegister.cantidadSalas = 0;
      
      if(this.loginForm.invalid) return;

      this.api.addCinema(this.cineRegister).subscribe(
        {
          next:() =>{
            alert("Cine creado con exito");
            this.closeDialog();
          },
          error: (error) => {
            console.log(error);
            alert("No se pudo crear el Cine");
          }
        }
      )

    }catch(error)
    { 
      console.log(error);   
    }
    
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  public async ValidateName()
  {
    try
    {      
      this.cineRegister.nombre = this.loginForm.get('name')?.value;
      const nameExists = await this.api.ValidateName(this.cineRegister.nombre!);

      if(await nameExists)
      {
        this.loginForm.get('name')?.setErrors({ nameExists: true });
      }

    }catch(error)
    {
      console.log(error);
      
    }
  }

*/


}
