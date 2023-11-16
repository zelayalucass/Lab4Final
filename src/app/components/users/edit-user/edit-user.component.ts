import { Component, Inject, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/Models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userToEdit!: User;
  public editForm!: FormGroup;

  // Inyecta los servicios necesarios
  constructor(
    private api: ApiService, 
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
      username: [this.userToEdit?.username || '', [Validators.required]],
      email: [this.userToEdit?.email || '', [Validators.required, Validators.email]],
      password: [this.userToEdit?.password || '', [Validators.required]],
    });
  }

  // Función para guardar el usuario editado
  saveUser(): void {
    if (this.userToEdit !== null && this.editForm.valid) {
      const editedUser: User = {
        ...this.userToEdit,
        username: this.editForm.get('username')?.value,
        email: this.editForm.get('email')?.value,
        password: this.editForm.get('password')?.value,
      };

      if (this.userToEdit.id !== null) {
        this.api.editUser(this.userToEdit.id, editedUser).subscribe({
          next: () => this.dialogRef.close(true),
          error: (error: any) => alert(error)
        });
      }
    }
  }

  // Función para cerrar el diálogo sin guardar cambios
  closeDialog(): void {
    this.dialogRef.close();
  }
}
