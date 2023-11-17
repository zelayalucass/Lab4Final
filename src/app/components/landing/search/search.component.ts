import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/Models';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements  OnInit {
  @Output() sendMoviesToCards = new EventEmitter<Movie[]>();

  movies: Movie[] = []; 
  movieToSearch : string  = '';

  constructor(private movieService : MovieService)
  {
  }

  ngOnInit(): void {
      this.movieToSearch = "Fast and furious"
      this.searchMovie();
  }

  searchMovie()
  {
    console.log(this.movieToSearch)
    this.movieService.getMovieToTitle(this.movieToSearch).subscribe((data : any)=>
    {
      this.movies = data['results'];
      this.movieService.actualizarListaPeliculas(this.movies);
    });
  }
}
