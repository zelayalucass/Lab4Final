import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/core/Models';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css'],
})
export class CardMovieComponent implements OnInit{

  moviesList : Movie[] = []

constructor(private serviceMovie : MovieService, private router:Router)
{
}

ngOnInit(): void {
    this.serviceMovie.listaPeliculas$.subscribe((lista)=>
    {
      this.moviesList = lista;
    });
}

goToDetail(id : number){
  this.router.navigate([`/landing/detail/${id}`]);
}
}
