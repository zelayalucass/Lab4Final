import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Movie } from 'src/app/core/Models';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private movieService : MovieService){
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    smartSpeed:3,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
    },
    nav: true
  }

ngOnInit()
{
  this.movieService.getTopMovie().subscribe((data :  any)=>{
    this.movies = data['results'];
  })
}

getImgTo(urlImg : string)
{
  this.movieService.getImageToUrl(urlImg).subscribe((data : any )=>{
  return data;     
  })
}
   public img: string ="";

  /*
  images: string[] = [
    'ruta-a-imagen-1.jpg',
    'ruta-a-imagen-2.jpg',
    'ruta-a-imagen-3.jpg',
    // Agrega más rutas de imágenes según sea necesario
  ];*/
}
