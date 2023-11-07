import { IUser } from "./Interface";
import { ICinema } from "./Interface";
import { IMovie } from "./Interface";
import { ITicket } from "./Interface";
import { IShowtime } from "./Interface";

export class User implements IUser
{
    id: number | null;
    username: string | null;
    email: string | null;
    password: string | null;

    constructor(user?: User) {
        this.id = user?.id == undefined ? null : user.id;
        this.username = user?.username == undefined ? '' : user.username;
        this.email = user?.email == undefined ? '' : user.email;
        this.password = user?.password == undefined ? '' : user.password;
    }    
}

export class Cinema implements ICinema {
    idCinema: number | null;
    nombre: string | null;
    direccion: string | null;
    cantidadSalas: number | null;

    constructor(cinema?: Cinema){
        this.idCinema = cinema?.idCinema == undefined ? null : cinema.idCinema;
        this.nombre = cinema?.nombre == undefined ? null : cinema.nombre;
        this.direccion = cinema?.direccion == undefined ? null : cinema.direccion;
        this.cantidadSalas = cinema?.cantidadSalas == undefined ? null : cinema.cantidadSalas;
    }
}

 export class Movie implements IMovie {
    idMovie: number | null;
    titulo: string | null;
    duracion: string | null;
    genero: string | null;
    idioma: string | null;
    año: string | null;
    descripcion: string | null;
    imagen: string | null;

    constructor(movie?: Movie){
        this.idMovie = movie?.idMovie == undefined ? null : movie.idMovie;
        this.titulo = movie?.titulo == undefined ? null : movie.titulo;
        this.duracion = movie?.duracion == undefined ? null : movie.duracion;
        this.genero = movie?.genero == undefined ? null : movie.genero;
        this.idioma = movie?.idioma == undefined ? null : movie.idioma;
        this.año = movie?.año == undefined ? null : movie.año;
        this.descripcion = movie?.descripcion == undefined ? null : movie.descripcion;
        this.imagen = movie?.imagen == undefined ? null : movie.imagen;
    }
 }

 export class Ticket implements ITicket {
    idTicket: number | null;
    idUsuario: number | null;
    idFuncion: number | null;
    fecha: Date | null;
    cantidadEntradas: number | null;

    constructor(ticket?: Ticket) {
        this.idTicket = ticket?.idTicket == undefined ? null : ticket.idTicket;
        this.idUsuario = ticket?.idUsuario == undefined ? null : ticket.idUsuario;
        this.idFuncion = ticket?.idFuncion == undefined ? null : ticket.idFuncion;
        this.fecha = ticket?.fecha == undefined ? null : ticket.fecha;
        this.cantidadEntradas = ticket?.cantidadEntradas == undefined ? null : ticket.cantidadEntradas;
    }
}

export class Showtime implements IShowtime {
    idFuncion: number | null;
    idPelicula: number | null;
    nombrePelicula: string | null;
    sala: number | null;
    horarios: string | null;

    constructor(showtime?: Showtime) {
        this.idFuncion = showtime?.idFuncion == undefined ? null : showtime.idFuncion;
        this.idPelicula = showtime?.idPelicula == undefined ? null : showtime.idPelicula;
        this.nombrePelicula = showtime?.nombrePelicula == undefined ? null : showtime.nombrePelicula;
        this.sala = showtime?.sala == undefined ? null : showtime.sala;
        this.horarios = showtime?.horarios == undefined ? null : showtime.horarios;
    }
}
