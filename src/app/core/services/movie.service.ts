
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../Models';

@Injectable({
  providedIn: 'root'
})

export class MovieService  {
  private authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjEyYzVjNDc2YjFmOGRkNDMyZjk1OWZjNjI3NDNiZCIsInN1YiI6IjY1NDgwZjM5NmJlYWVhMDBhYzIwZWI0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SFaZXQUqs3Zz1v3otDywJcl3-LmadS9t-3z7hYPT4i4';

  private listaPeliculasSource = new BehaviorSubject<Movie[]>([]);
  listaPeliculas$ = this.listaPeliculasSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  getTopMovie() //: Promise<any>
  {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=es&page=1';
    
    return this.httpClient.get(url,{headers}) //.toPromise();
  }

  getImageToUrl(urlImg : string)
  {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });
    const url = 'https://api.themoviedb.org/3' + {urlImg}

    return this.httpClient.get(url,{headers})
  }

  getMovieToTitle(title : string)
  {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });
    const url = `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=es-US&page=1`;

    return this.httpClient.get(url,{headers});
  }

  //Observable que actualiza la lista de elementos bsucados por el search
  actualizarListaPeliculas(movieList: Movie[]) {
    this.listaPeliculasSource.next(movieList);
  }

  getAllGenres()
  {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });
    const url = `https://api.themoviedb.org/3/genre/movie/list?language=es`;
    return this.httpClient.get(url,{headers});
  }

  getAllByGenre( idGenre : number, year : number){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es&page=1&sort_by=popularity.desc&with_genres=${idGenre}&year=${year}`;
    return this.httpClient.get(url,{headers});
  }
}
