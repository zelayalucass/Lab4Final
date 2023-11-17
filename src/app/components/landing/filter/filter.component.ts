import { Component, EventEmitter,Output, OnInit } from '@angular/core';
import { Genre, Movie } from 'src/app/core/Models';
import { MovieService } from 'src/app/core/services/movie.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  years: number[] = [];
  selectedYear: number = 0;
  idGenre: number = 0;
  //@Output() selected: EventEmitter<number> = new EventEmitter<number>();
  
  public genreList : Genre[] = []
  public movieslist : Movie[] = []

  constructor(private movieService : MovieService)
  {
    /*
    this.movieService.getAllGenres().subscribe((data : any )=>
    {
      this.genreList = data['genres'];
    })
    this.InitializeYears()*/
  }

ngOnInit(): void {
  
}

GetByGenre() {
  this.movieService.getAllByGenre(this.idGenre, this.selectedYear).subscribe((data : any )=> {
    this.movieslist = data["results"];
    this.movieService.actualizarListaPeliculas(this.movieslist);
  })
}

GetByYear(){
  this.movieService.getAllByGenre(this.idGenre, this.selectedYear).subscribe((data : any )=> {
    this.movieslist = data["results"];
    this.movieService.actualizarListaPeliculas(this.movieslist);
  })
}

InitializeYears()
{
  const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 30; i--) {
      this.years.push(i);
    }
}
  
}
