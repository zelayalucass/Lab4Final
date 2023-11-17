import { Component, OnInit } from '@angular/core';
import { Cinema, User } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import {lastValueFrom} from 'rxjs';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {


  selectedUser: User | null = null;
  listaUsers:User[] = [];
  funcionBuscada:string = '';
  isUserLoggedIn: boolean = false;
  showPassword: boolean = false;
  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserIdInLocalStorage();
  }

  constructor(private auth:AuthService, private user:ApiService){
    this.getUsers();
  }

  public onInputChange()
  {
    if(this.funcionBuscada == ""){
      this.getUsers()
    }else
    {
      this.listaUsers = this.listaUsers.filter(user => {
        // Convierte la función a cadena y busca la palabra en el nombre de usuario o correo electrónico
        const usernameMatch = user.username?.toLowerCase().includes(this.funcionBuscada.toLowerCase());
        const emailMatch = user.email?.toLowerCase().includes(this.funcionBuscada.toLowerCase());

        return usernameMatch || emailMatch;
    });
    }
  }

  toggleShowPassword(user: User): void {
    this.showPassword = !this.showPassword;
    this.selectedUser = user;
  }

  public async getUsers()
  {
    try
    {
        let apiResponde = this.user.getUsers();       
        let data = await lastValueFrom(apiResponde);
        this.listaUsers = data.map((user : any) => new User(user));
    }
    catch(error)
    {
      console.log(error);
      
    }
  }

  public CountUsers() : number
  {
    return this.listaUsers.length;
  }

  public async hacerAdim(user: User) {
    const cineIdString = localStorage.getItem('userId');
    const cineIdNumber = Number(cineIdString) || 0
    if(await this.permiteAdmintoUser && user.id !== cineIdNumber)
    {
      user.isAdmin = true;
      this.user.editUser(user.id!,user).subscribe(
        {
          next:() => alert("se modifico con exito"),
          error:() => alert("No se pudo modificar")
        }
      )
    }
    else
    {
      if(user.id === cineIdNumber) alert("No se puede autocambiar el rol")
      else alert("Minimo debe haber un Administrador");
    }

    }
    public async cancelarAdmin(user: User) {
      const cineIdString = localStorage.getItem('userId');
      const cineIdNumber = Number(cineIdString) || 0
      if(await this.permiteAdmintoUser() && user.id !== cineIdNumber)
      {
        user.isAdmin = false;
        this.user.editUser(user.id!,user).subscribe(
          {
            next:() => alert("se modifico con exito"),
            error:() => alert("No se pudo modificar")
          }
        )
      }
      else 
      {
        if(user.id === cineIdNumber) alert("No se puede cambiar el rol propio")
        else alert("Minimo debe haber un Administrador");

      }

    }
  
    public async permiteAdmintoUser() : Promise<boolean>
    {
      try
      {
        let apiResponde = this.user.getUSersAdmin();
        let data = await lastValueFrom(apiResponde);

        let admin = data.map((admin : any) => new User(admin))
        return admin.length > 1 ? true : false;
      }catch(error)
      {
        console.log(error);
        return false;  
      }

      
    }

  
}
