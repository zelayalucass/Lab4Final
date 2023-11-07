import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { lastValueFrom } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa los módulos necesarios

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public user:User = new User();
  public loginForm!: FormGroup; // Crea un FormGroup
  public focusedField: string | null = null; 

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, [Validators.required]]
    });

    // Configura un listener para el campo de correo electrónico
    this.loginForm.get('email')?.valueChanges.subscribe((email) => {
      if (!email) {
        // Borra los errores de ambos campos si el campo de correo electrónico está vacío
        this.loginForm.get('email')?.setErrors(null);
        this.loginForm.get('password')?.setErrors(null);
      }
    });

    // Configura un listener para el evento focusout del campo de correo electrónico
    this.loginForm.get('email')?.valueChanges.subscribe(() => {
      this.loginForm.get('email')?.updateValueAndValidity(); // Actualiza la validación en focusout
    });

    
  }

    // Función para verificar si el campo de contraseña está lleno
 
  constructor(private dialog: MatDialog, private router:Router, private auth: AuthService, private api:ApiService,  private formBuilder: FormBuilder) {}
 
  hasError(controlName: string, errorName: string): boolean {
    return this.loginForm.get(controlName)?.hasError(errorName) || false;
  }

  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '300px', height : '460px' // Ajusta el ancho según tus necesidades
    });

    dialogRef.afterClosed().subscribe(result => {
      // Puedes manejar acciones después de cerrar el diálogo aquí
    });
  }

  public NavigateToRegister()
  {
    this.router.navigate(['/auth/register'])
  }
  
  public async checkAuthLogin()
  {
     try
     {
        const check = await this.auth.checkAuth(this.user.email!,this.user.password!);
        if(await check)
        {   
          this.router.navigate(['/landing']);
        }
        else
        {
          alert('No existe el Usuario');
        }
     }catch(error)
     {
      console.log(error);
      
     }
  }


}
