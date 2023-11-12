import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../Models';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api:ApiService) { }

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



