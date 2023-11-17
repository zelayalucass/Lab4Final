import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cinema, Sala } from 'src/app/core/Models';
import { CinemaService } from 'src/app/core/services/cinema.service';
import { SalaService } from 'src/app/core/services/sala.service';

@Component({
  selector: 'app-edit-sala',
  templateUrl: './edit-sala.component.html',
  styleUrls: ['./edit-sala.component.css']
})
export class EditSalaComponent implements OnInit {
  salaRegister: Sala = new Sala();
  dialog: any;
  public loginForm!:FormGroup;
  nombreAnterior:string = '';
  @Output() userToCreate: EventEmitter<Cinema>= new EventEmitter();
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private api:CinemaService, private formBuilder: FormBuilder,private dialogRef: MatDialogRef<EditSalaComponent>, private sala:SalaService) {}
  ngOnInit(): void {
    debugger;
    this.salaRegister =  { ...this.data};  
    this.nombreAnterior =  `${this.salaRegister.nombreSala}`;
  
    this.loginForm = this.formBuilder.group({
      sala: [this.salaRegister.nombreSala, [Validators.required, Validators.minLength(5)]],
      butacas: [this.salaRegister.butacas, [Validators.required, this.validateButacas.bind(this)]]
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  
  public EditSala()
  {
    if(this.loginForm.invalid) return;

    this.salaRegister.butacas = this.loginForm.get('butacas')?.value;
  
    this.sala.editSala(this.salaRegister.id!,this.salaRegister).subscribe(
      {
        next: () => this.dialogRef.close(true),
        error: (error) => alert(error)
      }

    )
  }

  public async ValidateName()
  {
    try
    {      
      this.salaRegister.nombreSala = this.loginForm.get('sala')?.value;
      const nameExists = await this.sala.ValidateName(this.salaRegister.nombreSala!,this.salaRegister.idCine!);

      if(await nameExists)
      {
        if(this.salaRegister.nombreSala !== this.nombreAnterior)
          this.loginForm.get('sala')?.setErrors({ nameExists: true });
      }

    }catch(error)
    {
      console.log(error);
      
    }
  }

  public   validateButacas(control: AbstractControl): ValidationErrors | null {
    const butacasValue = parseInt(control.value, 10);

    if (isNaN(butacasValue) || butacasValue <= 0) {
      return { 'butacasInvalidas': true };
    }

    return null;
  }


}
