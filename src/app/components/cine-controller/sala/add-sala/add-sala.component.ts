import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { Cinema, Sala } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { CinemaService } from 'src/app/core/services/cinema.service';
import { SalaService } from 'src/app/core/services/sala.service';

@Component({
  selector: 'app-add-sala',
  templateUrl: './add-sala.component.html',
  styleUrls: ['./add-sala.component.css']
})
export class AddSalaComponent implements OnInit{

  selectedValue: string;
  listaCines: Cinema[] = [];
  salaRegister: Sala = new Sala();
  dialog: any;
  cineId:number| null = 0;
  public loginForm!:FormGroup;
  @Output() salaToCreate: EventEmitter<Sala>= new EventEmitter();
  
  constructor(private api:ApiService,private dialogRef: MatDialogRef<AddSalaComponent>, private cine:CinemaService,private sala:SalaService ,private formBuilder:FormBuilder) {
    this.selectedValue ="";
    this.getCines();
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      cineId: [this.salaRegister.idCine, Validators.required],
      sala: [this.salaRegister.nombreSala, [Validators.required, Validators.minLength(5)]],
      butacas: [this.salaRegister.butacas, [Validators.required, this.validateButacas.bind(this)]]
    })

    this.api.cineId$.subscribe((cine) => {
      this.cineId = cine; 
      this.loginForm.get('cineId')?.setValue(cine);
    })

  };

  public   validateButacas(control: AbstractControl): ValidationErrors | null {
    const butacasValue = parseInt(control.value, 10);

    if (isNaN(butacasValue) || butacasValue <= 0) {
      return { 'butacasInvalidas': true };
    }

    return null;
  }

  public registerSala()
  {
    try
    {
      this.salaRegister.nombreSala = this.loginForm.get('sala')?.value;
      this.salaRegister.butacas = this.loginForm.get('butacas')?.value;
      const cineIdString = this.loginForm.get('cineId')?.value;
      const cineIdNumber = Number(cineIdString) || 0
      this.salaRegister.idCine = cineIdNumber;
      this.salaRegister.nombreCine = this.listaCines.find(cine => cine.id === this.salaRegister.idCine)?.nombre || null;
      

      
      if(this.loginForm.invalid) return;

      this.sala.addSala(this.salaRegister).subscribe(
        {
          next:() =>{
            alert("Sala creado con exito");
            this.closeDialog();
          },
          error: (error) => {
            console.log(error);
            alert("No se pudo crear el sala");
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
      debugger;
      const cineIdString = this.loginForm.get('cineId')?.value;
      const cineIdNumber = Number(cineIdString) || 0
      this.salaRegister.nombreSala = this.loginForm.get('sala')?.value;
      const nameExists = await this.sala.ValidateName(this.salaRegister.nombreSala!,cineIdNumber!);

      if(await nameExists)
      {
        this.loginForm.get('sala')?.setErrors({ nameExists: true });
      }

    }catch(error)
    {
      console.log(error);
      
    }
  }


  public async getCines()
  {
    try
    {
        let apiResponde = this.cine.getCinemas();       
        let data = await lastValueFrom(apiResponde); 
        this.listaCines = data.map((product : any) => new Cinema(product))
    }
    catch(error)
    {
      console.log(error);
      
    }
  }


}
