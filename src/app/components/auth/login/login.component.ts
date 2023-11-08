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
    
  }

    // Función para verificar si el campo de contraseña está lleno
 
  constructor(private dialog: MatDialog, private router:Router, private auth: AuthService, private api:ApiService,  private formBuilder: FormBuilder) {}
 
  getError(controlName: string, errorName: string): string {
    return this.loginForm.get(controlName)?.getError(errorName);
  }

  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '400px', height : '560px' // Ajusta el ancho según tus necesidades
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
      this.user.email = this.loginForm.get('email')?.value;
      this.user.password = this.loginForm.get('password')?.value;
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

  clearForm() {
    this.loginForm.reset();
    this.loginForm.markAsUntouched();
    this.focusedField = null;
        // Borra los errores en el formulario
    this.loginForm.setErrors(null);
    this.loginForm.get('email')?.setErrors(null);
    this.loginForm.get('password')?.setErrors(null);
  }
  


}
