import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/core/Models';
import { CinemaService } from 'src/app/core/services/cinema.service';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  idPelicula : number = 0
  movie  : Movie = new Movie()
  constructor(private movieService : MovieService, private route: ActivatedRoute, private navigate : Router ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idPelicula = parseInt(params['id']);
        this.movieService.getMovieById(this.idPelicula).subscribe((data : any) =>{
          this.setPelicula(data)
        })
      });
  }

  setPelicula(dato : Movie)
  {
    console.log(dato)
    this.movie = dato
  }

  goToHome()
  {
    this.navigate.navigate(["/landing/landing-page"])
  }
}
