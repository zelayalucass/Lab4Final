import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cinema } from 'src/app/core/Models';
import { CinemaService } from 'src/app/core/services/cinema.service';

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
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private api:CinemaService, private formBuilder: FormBuilder,private dialogRef: MatDialogRef<EditCineComponent>) {}
  ngOnInit(): void {
    this.cineRegister =  { ...this.data};  
    this.nombreAnterior =  `${this.cineRegister.nombre}`;
    this.loginForm = this.formBuilder.group({
      name: [this.cineRegister.nombre, [Validators.required, Validators.minLength(5)]],
        direction: [this.cineRegister.direccion, [Validators.required]]
    })};


    public EditProduct()
    {
      this.api.editCinema(this.cineRegister.id!,this.cineRegister).subscribe(
        {
          next: () => this.dialogRef.close(true),
          error: (error) => alert(error)
        }
  
      )
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
        if(this.cineRegister.nombre !== this.nombreAnterior)
           this.loginForm.get('name')?.setErrors({ nameExists: true });
      }

    }catch(error)
    {
      console.log(error);
      
    }
  }

}
