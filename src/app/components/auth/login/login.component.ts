import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public user:User = new User();
  public persons: Array<User> = [];
  ngOnInit(): void {
   
  }

  constructor(private dialog: MatDialog, private router:Router, private auth: AuthService, private api:ApiService) {}

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

  public async getPersons() {

    try {

      let responseApi = this.api.getUsers();

      const data = await lastValueFrom(responseApi);

      this.persons = data.map((personData: any) => new User(personData));

      debugger;
      console.log(this.persons);
      
    } catch (error) {
      console.error(error);
    }
  }

}
