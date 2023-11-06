import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/core/Models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public user:User = new User();
  ngOnInit(): void {
   
  }

  constructor(private dialog: MatDialog, private router:Router, private auth: AuthService) {}

  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '300px', height : '460px' // Ajusta el ancho según tus necesidades
    });

    dialogRef.afterClosed().subscribe(result => {
      // Puedes manejar acciones después de cerrar el diálogo aquí
    });
  }

  public async checkAuth()
  {
     try
     {
        const check = this.auth.checkAuth(this.user.email!,this.user.username!);

        if(await check)
        {   
          debugger
          console.log(this.user);
          
          this.router.navigate(['/landing'])
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

  public NavigateToRegister()
  {
    this.router.navigate(['/auth/register'])
  }
  
}
