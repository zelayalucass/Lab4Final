import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie, Showtime } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';
import { MovieService } from 'src/app/core/services/movie.service';
import { ShowtimeService } from 'src/app/core/services/showtime.service';

@Component({
  selector: 'app-add-showtime',
  templateUrl: './add-showtime.component.html',
  styleUrls: ['./add-showtime.component.css']
})

export class AddShowtimeComponent implements OnInit{
  movieList: Movie[] = [];
  movieTitle : string =""
  public viewSalas : boolean = false
  public showtimeRegister: Showtime = new Showtime();

  public loginForm!:FormGroup;
  isUserLoggedIn: boolean = false;
  
  @Output() userToCreate: EventEmitter<Showtime>= new EventEmitter();
  
  constructor(private api:ShowtimeService,private auth:AuthService
     ,private formBuilder:FormBuilder, private movieServie:MovieService) {}

  ngOnInit(): void {

    this.isUserLoggedIn = this.auth.isUserIdInLocalStorage();

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
      console.log(title)
      this.showtimeRegister.nombrePelicula = title;
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
