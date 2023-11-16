import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { Cinema, Sala } from 'src/app/core/Models';
import { CinemaService } from 'src/app/core/services/cinema.service';
import { SalaService } from 'src/app/core/services/sala.service';

@Component({
  selector: 'app-edit-cine',
  templateUrl: './edit-cine.component.html',
  styleUrls: ['./edit-cine.component.css']
})
export class EditCineComponent implements OnInit {
  cineRegister: Cinema = new Cinema();
  dialog: any;
  public loginForm!:FormGroup;
  nombreAnterior:string = '';
  @Output() userToCreate: EventEmitter<Cinema>= new EventEmitter();
  @Output() resCineEdit : EventEmitter<boolean> = new EventEmitter();
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private api:CinemaService, private formBuilder: FormBuilder,private dialogRef: MatDialogRef<EditCineComponent>, private sala:SalaService) {}
  ngOnInit(): void {
    debugger;
    this.cineRegister =  { ...this.data};  
    this.nombreAnterior =  `${this.cineRegister.nombre}`;
  
    this.loginForm = this.formBuilder.group({
      name: [this.cineRegister.nombre, [Validators.required, Validators.minLength(5)]],
        direccion: [this.cineRegister.direccion, [Validators.required]]
    })};


    public async EditProduct()
    {
      if(this.loginForm.invalid) return;
      this.cineRegister.direccion = this.loginForm.get('direccion')?.value;

     /* this.api.editCinema(this.cineRegister.id!,this.cineRegister).subscribe(
        {
          next: (res) => 
          {
            this.dialogRef.close(true);
            
          },
          error: (error) => alert(error)
        }
  
      )*/

      try {
        const res = await this.api.editCinema(this.cineRegister.id!, this.cineRegister).toPromise();
        if(res)
        {
          this.dialogRef.close(true);
          if(this.cineRegister.nombre !== this.nombreAnterior)
          {
            let apiResponse = this.sala.getSalaByCinema(this.cineRegister.id!);

            let data = await lastValueFrom(apiResponse);
  
            let salas = data.map((sala:any) => new Sala(sala));
  
  
            salas.forEach(element => {
              element.nombreCine = this.cineRegister.nombre!
              this.sala.editSala(element.id!, element).subscribe(
                {
                  next: () => this.dialogRef.close(true),
                  error: (error) => alert(error)
                }
              )
            });
  
          }
        }
        else alert("No se pudo editar");
         
      } catch (error) {
        alert(error);
      }
      

    }

  closeDialog(): void {
    this.dialogRef.close();
  }

  public resEditCine(res : boolean)
  {
    this.resCineEdit.emit(res);
  }

  public async ValidateName()
  {
    try
    {      
      this.cineRegister.nombre = this.loginForm.get('name')?.value;
      const nameExists = await this.api.ValidateName(this.cineRegister.nombre!);


      if(await nameExists)
      {
        if(this.cineRegister.nombre !== this.nombreAnterior)
           this.loginForm.get('name')?.setErrors({ nameExists: true });
      }

    }catch(error)
    {
      console.log(error);
      
    }
  }

}
