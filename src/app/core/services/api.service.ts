import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError, of } from 'rxjs';
import { User } from '../Models';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl:string = "http://localhost:3000";
  constructor(private http: HttpClient) {

   }


   public getToAuth(email:string, password:string) : Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}&password=${password}`);
   }

   public getUsers() : Observable<User[]>
   {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
   }

   public deleteUser(id:number) : Observable<boolean>
   {
    const url = `${this.baseUrl}/users/${id}`;
    return this.http.delete<boolean>(url).pipe
    (
      map(res => {return true}),
      catchError(error => of(false))
    );
   }

   public editUser(id:number , updatePerson:User): Observable<Boolean>
   {
    const url = `${this.baseUrl}/users/${id}`;
    return this.http.put<boolean>(url,updatePerson);
   }

   public addUser(user:User): Observable<Boolean>
   {
      const url = `${this.baseUrl}/users`;
      return this.http.post<boolean>(url,user);
   }

   
}