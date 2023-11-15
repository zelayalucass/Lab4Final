import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError, of, tap, BehaviorSubject } from 'rxjs';
import { Cinema, User } from '../Models';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl:string = "http://localhost:3000";
  private cineIdSubject = new BehaviorSubject<number | null>(null);
  cineId$ = this.cineIdSubject.asObservable();

  getCineActualViewCineFromSala(cineId: number) {
    this.cineIdSubject.next(cineId);
  }


  constructor(private http: HttpClient) {

   }


   public getToAuth(email:string, password:string) : Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}&password=${password}`);
   }

   public getUsers() : Observable<User[]>
   {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
   }

   public getUser4Email(email:string) : Observable<User[]>
   {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
   }

   public getUser4UserName(username:string) : Observable<User[]>
   {
    return this.http.get<User[]>(`${this.baseUrl}/users?username=${username}`);
   }

   public getUser4Identication(id:number) : Observable<User[]>
   {
    return this.http.get<User[]>(`${this.baseUrl}/users?id=${id}`);
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