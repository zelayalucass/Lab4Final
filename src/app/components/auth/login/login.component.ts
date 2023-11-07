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

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, [Validators.required, Validators.minLength(3)]]
    });
  }

  constructor(private dialog: MatDialog, private router:Router, private auth: AuthService, private api:ApiService,  private formBuilder: FormBuilder) {}

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
