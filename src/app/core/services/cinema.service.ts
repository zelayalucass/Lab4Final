import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Cinema } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private baseUrl: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  public getCinemas(): Observable<Cinema[]> {
    const url = `${this.baseUrl}/cines`
    return this.http.get<Cinema[]>(url);
  }

  public getCinemaById(id: number): Observable<Cinema> {
    const url = `${this.baseUrl}/cines/${id}`;
    return this.http.get<Cinema>(url);
  }

  public deleteCinema(id: number): Observable<boolean> {
  
    const url = `${this.baseUrl}/cines/${id}`;
    return this.http.delete<boolean>(url).pipe
    (
      map(res => {return true}),
      catchError(error => of(false))
    );
  }

  public editCinema(id: number, updatedCine: Cinema): Observable<boolean> {
    const url = `${this.baseUrl}/cines/${id}`;
    return this.http.put<boolean>(url, updatedCine);
  }

  public addCinema(newCine: Cinema): Observable<boolean> {
    debugger;
    console.log(newCine);
    const url = `${this.baseUrl}/cines`;
    return this.http.post<boolean>(url, newCine);
  }

  public getCines4Name(name:string) : Observable<Cinema[]>
  {
   return this.http.get<Cinema[]>(`${this.baseUrl}/cines?nombre=${name}`);
  }

  public async ValidateName(name:string) : Promise<boolean>
  {
    let cines:Cinema[] = [];
    try
    {
        let apiResponse = this.getCines4Name(name);

        cines = await lastValueFrom(apiResponse);


    }catch(error)
    {
      console.log(error);
      
    }   
    return cines.length >= 1;
  }
}