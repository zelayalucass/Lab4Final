import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Movie } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl: string = "http://localhost:3000/movies";

  constructor(private http: HttpClient) { }

  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl);
  }

  public getMovieById(id: number): Observable<Movie> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Movie>(url);
  }

  public deleteMovie(id: number): Observable<boolean> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<boolean>(url).pipe(
      map(res => true),
      catchError(error => {
        console.error("Error deleting movie:", error);
        return new Observable<boolean>();
      })
    );
  }

  public editMovie(id: number, updatedMovie: Movie): Observable<boolean> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<boolean>(url, updatedMovie);
  }

  public addMovie(newMovie: Movie): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl, newMovie);
  }
}