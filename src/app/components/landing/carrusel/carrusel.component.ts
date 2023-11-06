import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    },
    nav: true
  };

  images: string[] = [
    'ruta-a-imagen-1.jpg',
    'ruta-a-imagen-2.jpg',
    'ruta-a-imagen-3.jpg',
    // Agrega más rutas de imágenes según sea necesario
  ];
}
