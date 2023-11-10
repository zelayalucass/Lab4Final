import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Movie } from 'src/app/core/Models';
import { MovieService } from 'src/app/core/services/movie.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingComponent implements OnInit  {

  movies : Movie[] = []

  ngOnInit(): void {
  }
  
   getMovies(listMovies : Movie){
    this.movies.push(listMovies);
   }

}
