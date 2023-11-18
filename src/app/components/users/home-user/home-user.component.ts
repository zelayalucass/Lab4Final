import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  
  constructor(private auth: AuthService, private dialog: MatDialog, private router: Router) {}
  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserIdInLocalStorage();
  }
  public EditUser(user: User)
  {
      const dialogResult = this.dialog.open(EditUserComponent, {data : user, height: '480px', width:'400px'})
  
      dialogResult.afterClosed().subscribe(result => this.router.navigate(['/user/home']).then(() => {
        // Recargar la página después de la redirección para asegurar una carga limpia
        location.reload();
      }))
  }
}

