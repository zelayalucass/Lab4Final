import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { User } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  userRegister: User = new User();
  dialog: any;
  public loginForm!:FormGroup;
  // Permite pasarle como parámetro datos a un componente abierto a travez de matDialog.
  constructor(private dialogRef: MatDialogRef<RegisterComponent>, private api:ApiService,private auth:AuthService ,private formBuilder:FormBuilder) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        username: [this.userRegister.username, [Validators.required, Validators.minLength(5)]],
        email: [this.userRegister.email, [Validators.required, Validators.email]],
        password: [this.userRegister.password,[Validators.required,Validators.minLength(5)]]
    })};

  public registerUser()
  {
    try
    {
      this.userRegister.username = this.loginForm.get('username')?.value;
      this.userRegister.email = this.loginForm.get('email')?.value;
      this.userRegister.password = this.loginForm.get('password')?.value;

      if(this.loginForm.invalid) return;

      this.api.addUser(this.userRegister).subscribe(
        {
          next:() =>{
            alert("Usuario creado con exito");
            this.closeDialog();
          },
          error: () => {
            alert("No se pudo crear el usuario");
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

  public async ValidateEmail()
  {
    try
    {
      this.userRegister.email = this.loginForm.get('email')?.value;
      const emailExists = await this.auth.ValidateEmail(this.userRegister.email!);

      if(await emailExists)
      {
        this.loginForm.get('email')?.setErrors({ emailExists: true });
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
      this.userRegister.username = this.loginForm.get('username')?.value;
      const userNameExists  = await this.auth.ValidateUserName(this.userRegister.username!);

      if(await userNameExists )
      {
        this.loginForm.get('username')?.setErrors({ userNameExists: true });
      }

    }catch(error)
    {
      console.log(error);
      
    }
  }

}
