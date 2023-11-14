import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Cinema, User } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { CinemaService } from 'src/app/core/services/cinema.service';

@Component({
  selector: 'app-add-cine',
  templateUrl: './add-cine.component.html',
  styleUrls: ['./add-cine.component.css']
})
export class AddCineComponent implements OnInit {

  cineRegister: Cinema = new Cinema();
  dialog: any;
  public loginForm!:FormGroup;
  @Output() userToCreate: EventEmitter<Cinema>= new EventEmitter();
  
  constructor(private dialogRef: MatDialogRef<AddCineComponent>, private api:CinemaService,private auth:AuthService ,private formBuilder:FormBuilder) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: [this.cineRegister.nombre, [Validators.required, Validators.minLength(5)]],
        direction: [this.cineRegister.direccion, [Validators.required]]
    })};


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



}
