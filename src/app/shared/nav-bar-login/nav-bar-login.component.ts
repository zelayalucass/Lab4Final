import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-nav-bar-login',
  templateUrl: './nav-bar-login.component.html',
  styleUrls: ['./nav-bar-login.component.css']
})
export class NavBarLoginComponent implements OnInit{

  isAdmin: boolean = false;
  userId : number = 0;
  userLogged : User = new User();
  constructor(private router:Router, private auth:AuthService)
  {

  }
  ngOnInit(): void {
    const isAdminStr = localStorage.getItem('isAdmin');
    const idUser = localStorage.getItem('userId');
    const idUserNumber = parseInt(idUser!, 10);
    this.isAdmin = isAdminStr ? JSON.parse(isAdminStr) : false;

    if (!isNaN(idUserNumber)) {
      this.userId = idUserNumber
      this.getUserLogged();
    }
    else
    {
      alert("Error de logueo");
      this.router.navigate(['/navigate'])
    }
    
  }

  public CloseSession()
  {
    this.clearLocalStorage();
    this.router.navigate(['/landing']).then(() => {
      // Recargar la página después de la redirección para asegurar una carga limpia
      location.reload();
    });
  }

  public async getUserLogged()
  {
      const user = await this.auth.getUser4Identification(this.userId);

      if(await user != null)
      {
        this.userLogged = user;
      }
  }

  clearLocalStorage(): void {
    localStorage.removeItem('userId');
    localStorage.removeItem('isAdmin');
  }


  goToFunciones()
  {
    this.router.navigate(['/showtime/home'])
  }
}
