import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Showtime } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class ShowtimeService {

  private baseUrl: string = "http://localhost:3000/showtimes";

  constructor(private http: HttpClient) { }

  public getShowtimes(): Observable<Showtime[]> {
    return this.http.get<Showtime[]>(this.baseUrl);
  }

  public getShowtimeById(id: number): Observable<Showtime> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Showtime>(url);
  }

  public deleteShowtime(id: number): Observable<boolean> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<boolean>(url).pipe(
      map(res => true),
      catchError(error => {
        console.error("Error deleting showtime:", error);
        return new Observable<boolean>();
      })
    );
  }

  public editShowtime(id: number, updatedShowtime: Showtime): Observable<boolean> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<boolean>(url, updatedShowtime);
  }

  public addShowtime(newShowtime: Showtime): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl, newShowtime);
  }
}