import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})

export class DetailUserComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  showPassword: boolean = false;
  userData: any;
  isAdmin: boolean = false;
  userId: number = 0;
  userLogged: User = new User();

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserIdInLocalStorage();
    // Obtén los datos del usuario del localStorage y conviértelos a un objeto
    this.userData = localStorage.getItem('userId');

    if (this.isUserLoggedIn) {
      this.userId = parseInt(this.userData, 10); // Asegúrate de convertir el userId a un número
      this.getUserLogged();
    }
  }

  public async getUserLogged() {
    try {
      const user = await this.auth.getUser4Identification(this.userId);
debugger
      if (user !== null) {
        this.userLogged = user;
        // También puedes verificar si el usuario es un administrador aquí
        this.isAdmin = user.isAdmin || false;
      }
    } catch (error) {
      console.error('Error obteniendo datos del usuario:', error);
    }
  }
  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }
}
