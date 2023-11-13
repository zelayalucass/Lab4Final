import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { User } from '../../../core/Models'; // Asegúrate de proporcionar la ruta correcta a tu modelo User.

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class UserDetailsContainerComponent implements OnInit {
  user: User | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    // Obtener el ID del usuario de la ruta
    const userId = 1;//this.route.snapshot.params.id;

    // Llamar al método del servicio para obtener los detalles del usuario por ID
    this.apiService.getUser4Identication(userId).subscribe(
      (userDetails: User[]) => {
        // Suponemos que getUser4Identication devuelve un array con un solo usuario
        this.user = userDetails[0];
      },
      (error) => {
        console.error(error);
        // Manejar el error, por ejemplo, redirigir a una página de error o mostrar un mensaje al usuario
      }
    );
  }
}

/*
export class EditUserComponent implements OnInit {
 user : User | null = null;
 id: number = 1;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService,
     private formBuilder: FormBuilder) { }
     
    ngOnInit(): void {
      this.api.getUser4Identication(this.id).subscribe(users => {
        if (users && users.length > 0) {
          this.user = users[0];
        }
      });
    }
    
  }
  /*getUserById(id: any) {
    this.api.getUser4Identication(id).subscribe((data: User[]) => {
      if (data && data.length > 0) {
        const firstUser = data[0];
        this._id = firstUser.id? firstUser.id.toString() : '';
        this.userForm.setValue({
          username: firstUser.username,
          email: firstUser.email,
          password: firstUser.password,
          isAdmin: firstUser.isAdmin,
        });
      }
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.editUser(this._id ? Number(this._id) : 0, this.userForm.value).subscribe(
      (res: any) => {
        this.isLoadingResults = false;
        this.router.navigate(['/user-details', this._id]);
      },
      (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }

  userDetails() {
    this.router.navigate(['/user-details', this._id]);
  }
}*/
/*
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}*/
