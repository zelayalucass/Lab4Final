import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Ticket } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private baseUrl: string = "http://localhost:3000/tickets";

  constructor(private http: HttpClient) { }

  public getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.baseUrl);
  }

  public getTicketById(id: number): Observable<Ticket> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Ticket>(url);
  }

  public deleteTicket(id: number): Observable<boolean> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<boolean>(url).pipe(
      map(res => true),
      catchError(error => {
        console.error("Error deleting ticket:", error);
        return new Observable<boolean>();
      })
    );
  }

  public editTicket(id: number, updatedTicket: Ticket): Observable<boolean> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<boolean>(url, updatedTicket);
  }

  public addTicket(newTicket: Ticket): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl, newTicket);
  }
}