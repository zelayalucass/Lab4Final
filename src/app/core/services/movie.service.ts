import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService  {
  private authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjEyYzVjNDc2YjFmOGRkNDMyZjk1OWZjNjI3NDNiZCIsInN1YiI6IjY1NDgwZjM5NmJlYWVhMDBhYzIwZWI0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SFaZXQUqs3Zz1v3otDywJcl3-LmadS9t-3z7hYPT4i4';

  constructor(private httpClient: HttpClient) { }

  getTopMovie() //: Promise<any>
  {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=esp&page=1';
    
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
}
