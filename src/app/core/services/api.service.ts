import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError, of, tap } from 'rxjs';
import { Cinema, User } from '../Models';


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

   getCases(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>(`${this.baseUrl}/cines`)
      .pipe(
        tap(cinema => console.log('fetched cinemas')),
        catchError(this.handleError('getCases', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

   
}