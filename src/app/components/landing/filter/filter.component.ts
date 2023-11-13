import { Component, EventEmitter,Output, OnInit } from '@angular/core';
import { Genre } from 'src/app/core/Models';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  
  idGenre: number = 0;
  @Output() selected: EventEmitter<number> = new EventEmitter<number>();
  
  public genreList : Genre[] = []

  constructor(private movieService : MovieService)
  {

  }

ngOnInit(): void {
  this.movieService.getAllGenres().subscribe((data : any )=>
  {
    this.genreList = data['genres'];
  })
}

enviarVariable() {
  this.selected.emit(this.idGenre);
}
}
