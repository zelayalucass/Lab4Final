import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Sala } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  private baseUrl: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  public getSalas(): Observable<Sala[]> {
    const url = `${this.baseUrl}/salas`
    return this.http.get<Sala[]>(url);
  }

  public getSalaByCinema(id: number): Observable<Sala> {
    const url = `${this.baseUrl}/sala?idCinema=${id}`;
    return this.http.get<Sala>(url);
  }

  public deleteSala(id: number, idSala: number): Observable<boolean> {
  
    const url = `${this.baseUrl}/sala?id=${id}&idSala=${idSala}`;
    return this.http.delete<boolean>(url).pipe
    (
      map(res => {return true}),
      catchError(error => of(false))
    );
  }


  public editSala(id: number, idSala: number, updatedSala: Sala): Observable<boolean> {
    const url = `${this.baseUrl}/sala?id=${id}&idSala=${idSala}`;
    return this.http.put<boolean>(url, updatedSala);
  }

  public addSala(newSala: Sala): Observable<boolean> {
    debugger;
    console.log(newSala);
    const url = `${this.baseUrl}/salas`;
    return this.http.post<boolean>(url, newSala);
  }
}