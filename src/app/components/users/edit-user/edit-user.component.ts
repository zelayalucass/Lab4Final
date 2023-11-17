import { Component, Inject, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/Models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userToEdit!: User;
  public editForm!: FormGroup;
  public nombreAnterior : String = '';
  public emailAnterior : String = '';
  public passAnterior : string = '';

  // Inyecta los servicios necesarios
  constructor(
    private api: ApiService,
    private auth: AuthService, 
    private formBuilder: FormBuilder, 
    private dialogRef: MatDialogRef<EditUserComponent>,    

    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      this.userToEdit = { ... this.data}
    }

  // Inicializa el formulario y asigna valores iniciales
  ngOnInit(): void {
    console.log('User to edit in EditUserComponent:', this.userToEdit);
    this.editForm = this.formBuilder.group({
      username: [this.userToEdit.username, [Validators.required, Validators.minLength(5)]],
      email: [this.userToEdit.email, [Validators.required, Validators.email]],
      password: [this.userToEdit.password,[Validators.required,Validators.minLength(5)]]
    });

    this.nombreAnterior = this.userToEdit.username!;
    this.emailAnterior = this.userToEdit.email!;
    this.passAnterior = this.userToEdit.password!;
  }

  // Función para guardar el usuario editado
  saveUser(): void {
    
    if(this.userToEdit.username === this.nombreAnterior && this.userToEdit.email === this.emailAnterior && this.userToEdit.password === this.passAnterior) return;
    if (this.userToEdit !== null && this.editForm.valid) {
      const editedUser: User = {
        ...this.userToEdit,
        username: this.editForm.get('username')?.value,
        email: this.editForm.get('email')?.value,
        password: this.editForm.get('password')?.value,
      };

      if (this.userToEdit.id !== null) {
        this.api.editUser(this.userToEdit.id, editedUser).subscribe({
          next: () => {this.dialogRef.close(true); alert("Se modifico con exito")},
          error: (error: any) => alert(error)
        });
      }
    }
  }

  // Función para cerrar el diálogo sin guardar cambios
  closeDialog(): void {
    this.dialogRef.close();
  }

  public async ValidateEmail()
  {
    try
    {
      
      this.userToEdit.email = this.editForm.get('email')?.value;
      const emailExists = await this.auth.ValidateEmail(this.userToEdit.email!);

      if(await emailExists)
      {
        if(this.editForm.get('email')?.value !== this.emailAnterior)
            this.editForm.get('email')?.setErrors({ emailExists: true });
      }

    }catch(error)
    {
      console.log(error);
      
    }
  }

  public async ValidateUserName()
  {
    try
    {
      this.userToEdit.username = this.editForm.get('username')?.value;
      const userNameExists  = await this.auth.ValidateUserName(this.userToEdit.username!);

      if(await userNameExists )
      {
        if(this.editForm.get('username')?.value !== this.nombreAnterior)
          this.editForm.get('username')?.setErrors({ userNameExists: true });
      }

    }catch(error)
    {
      console.log(error);
      
    }
  }
}
