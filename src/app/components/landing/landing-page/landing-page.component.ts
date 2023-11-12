import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Movie } from 'src/app/core/Models';
import { MovieService } from 'src/app/core/services/movie.service';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})

export class LandingComponent implements OnInit  {
  idGenre: number = 0;
  movies : Movie[] = []

  isUserLoggedIn: boolean = false;
  constructor(private auth: AuthService) {}
  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserIdInLocalStorage();
  }
  
  getMovies(listMovies : Movie){
  this.movies.push(listMovies);
  }

  getGenreSelected(idGenre : number)
  {
    this.idGenre = idGenre;
    console.log("id Genero buscado")
    console.log(this.idGenre)
  }

}
