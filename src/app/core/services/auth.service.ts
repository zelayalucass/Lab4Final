import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../Models';
import { Observable, catchError, lastValueFrom, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost:3000/users';
  private user?: User;
  get currentUser(): User | undefined {
    if (!this.user) return undefined
    //structuredClone(this.user)
    return { ...this.user };
  }
  constructor(private api:ApiService, private router:Router, private http:HttpClient) { }

  public async checkAuth(email:string, password:string):Promise<boolean>
  {
    let users:User[] = [];

    try
    {
      let apiResponse = this.api.getToAuth(email,password);

      users = await lastValueFrom(apiResponse);

    }catch(error)
    {
      console.log(error);
    }
    return users.length == 1;

  }

  public async getUser(email:string, password:string):Promise<User>
  {
    let users:User[] = [];

    try
    {
      let apiResponse = this.api.getToAuth(email,password);

      users = await lastValueFrom(apiResponse);

    }catch(error)
    {
      console.log(error);
    }
    return users[0];

  }

  

  public async verificarUserAndPassGuard(email:string, password:string)
  {
    let users:User[] = [];

    try
    {
      let apiResponse = this.api.getUsers().subscribe(users => {

        users.find(u => {
          if(u.password === password && u.email === email)
          {
            this.user = u;
            this.router.navigate(['/landing'])
          }
        });
      });
   
    }catch(error)
    {
      console.log(error);
    }

  }

  checkStatusAutenticacion(): Observable<boolean> {
    const token = localStorage.getItem('userId')
    if (!token) {
      return of(false)
    }
    return this.http.get<User>(`${this.url}/${token}`)
      .pipe(
        tap(u => this.user = u),
        map(u => !!u),
        catchError(err => of(false))
      )
  }

     
  logout() {
    this.user = undefined;
    localStorage.clear()
  }


public async getUser4Identification(id:number): Promise<User> 
{

  let users:User[] = [];
  try
  { 
    let apiResponse = this.api.getUser4Identication(id);

    users = await lastValueFrom(apiResponse);

  }catch(error)
  {
    console.log(error);
    
  }

  return users[0];
}

  public isUserIdInLocalStorage(): boolean {
    return !!localStorage.getItem('userId');
  }
  public typeUser(): string {
    return localStorage.getItem('isAdmin')!;
  }
  public async GetLastIdentification():Promise<number>
  {

    let users: User[] = [];
    try
    {
        let apiResponse = this.api.getUsers();
        
        users = await lastValueFrom(apiResponse);

        if(await users.length > 0)
        {
          let lastUser = users[users.length - 1];          
          return (lastUser.id! + 1);
        }

    }catch(error)
    {
      console.log(error);
      
    }
    return 0;
  }
  public async ValidateEmail(email:string) : Promise<boolean>
  {
    let users:User[] = [];
    try
    {
        let apiResponse = this.api.getUser4Email(email);

        users = await lastValueFrom(apiResponse);


    }catch(error)
    {
      console.log(error);
      
    }   
    return users.length >= 1;
  }

  public async ValidateUserName(username:string) : Promise<boolean>
  {
    let users:User[] = [];
    try
    {
        let apiResponse = this.api.getUser4UserName(username);

        users = await lastValueFrom(apiResponse);


    }catch(error)
    {
      console.log(error);
      
    }   
    return users.length >= 1;
  }
}



