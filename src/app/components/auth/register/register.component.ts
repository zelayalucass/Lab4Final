import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { User } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  userRegister: User = new User();
  dialog: any;
  // Permite pasarle como parámetro datos a un componente abierto a travez de matDialog.
  constructor(private dialogRef: MatDialogRef<RegisterComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  public checkAuth()
  {
    debugger
    console.log(this.userRegister);
    
  }

}
