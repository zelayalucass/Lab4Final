import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Cinema } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private baseUrl: string = "http://localhost:3000/cines";

  constructor(private http: HttpClient) { }

  public getCinemas(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>(this.baseUrl);
  }

  public getCinemaById(id: number): Observable<Cinema> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cinema>(url);
  }

  public deleteCinema(id: number): Observable<boolean> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<boolean>(url).pipe(
      map(res => true),
      catchError(error => {
        console.error("Error deleting cine:", error);
        return new Observable<boolean>();
      })
    );
  }

  public editCinema(id: number, updatedCine: Cinema): Observable<boolean> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<boolean>(url, updatedCine);
  }

  public addCinema(newCine: Cinema): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl, newCine);
  }
}