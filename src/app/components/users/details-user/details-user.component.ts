import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { ApiService } from 'src/app/core/services/api.service';

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
  router: any;

  constructor(private auth: AuthService, private apiUser:ApiService, private dialog:MatDialog) {}

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

  @Output() userToEdit: EventEmitter<User> = new EventEmitter();

  editUser(user: User){
    this.userToEdit.emit(user);
  }
}