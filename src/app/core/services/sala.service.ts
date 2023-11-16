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
  public getSalaById(id: number): Observable<Sala> {
    const url = `${this.baseUrl}/sala?id=${id}`;
    return this.http.get<Sala>(url);
  }

  public getSalaByCinema(id: number): Observable<Sala[]> {
    const url = `${this.baseUrl}/salas?idCine=${id}`;
    return this.http.get<Sala[]>(url);
  }

  public getSalas4Name(nombre: string, idCine:number): Observable<Sala[]> {
    const url = `${this.baseUrl}/salas?idCine=${idCine}&&nombreSala=${nombre}`;
    return this.http.get<Sala[]>(url);
  }

  public deleteSala(id: number): Observable<boolean> {
  
    const url = `${this.baseUrl}/salas/${id}`;
    return this.http.delete<boolean>(url).pipe
    (
      map(res => {return true}),
      catchError(error => of(false))
    );
  }

  public async ValidateName(name:string,id:number) : Promise<boolean>
  {
    let salas:Sala[] = [];
    try
    {  
      debugger; 
        let apiResponse = this.getSalas4Name(name,id);

        salas = await lastValueFrom(apiResponse);


    }catch(error)
    {
      console.log(error);
      
    }   
    return salas.length >= 1;
  }


  public editSala(id: number, updatedSala: Sala): Observable<boolean> {
    const url = `${this.baseUrl}/salas/${id}`;
    return this.http.put<boolean>(url, updatedSala);
  }

  public addSala(newSala: Sala): Observable<boolean> {
    const url = `${this.baseUrl}/salas`;
    return this.http.post<boolean>(url, newSala);
  }
}