import { tick } from "@angular/core/testing";
import { IGenre, ISala, IUser } from "./Interface";
import { ICinema } from "./Interface";
import { IMovie } from "./Interface";
import { ITicket } from "./Interface";
import { IShowtime } from "./Interface";
import { OriginalLanguage } from "./original-language";

export class User implements IUser
{
    id: number | null;
    username: string | null;
    email: string | null;
    password: string | null;
    isAdmin : boolean | null;

    constructor(user?: User) {
        this.id = user?.id == undefined ? null : user.id;
        this.username = user?.username == undefined ? '' : user.username;
        this.email = user?.email == undefined ? '' : user.email;
        this.password = user?.password == undefined ? '' : user.password;
        this.isAdmin = user?.isAdmin == undefined ? false : user.isAdmin;

    }    
}

export class Cinema implements ICinema {
    id: number | null;
    nombre: string | null;
    direccion: string | null;
    cantidadSalas: number | null;

    constructor(cinema?: Cinema){
        this.id = cinema?.id == undefined ? null : cinema.id;
        this.nombre = cinema?.nombre == undefined ? null : cinema.nombre;
        this.direccion = cinema?.direccion == undefined ? null : cinema.direccion;
        this.cantidadSalas = cinema?.cantidadSalas == undefined ? null : cinema.cantidadSalas;
    }
}

 export class Movie implements IMovie {
    adult:             boolean | null;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;

    constructor(movie?: Movie)
    {
        this.adult = movie?.adult == undefined ? null : movie.adult;
        this.backdrop_path = movie?.backdrop_path == undefined ? "" : movie.backdrop_path;
        this.genre_ids = movie?.genre_ids == undefined ? [] : movie.genre_ids;
        this.id = movie?.id == undefined ? 0 : movie.id;
        this.original_language = movie?.original_language == undefined ? OriginalLanguage.None : movie.original_language;
        this.original_title = movie?.original_title == undefined ? "" : movie.original_title;
        this.overview = movie?.overview == undefined ? "" : movie.overview;
        this.popularity = movie?.popularity == undefined ? 0 : movie.popularity;
        this.release_date = movie?.release_date == undefined ? new Date() : movie.release_date;
        this.poster_path = movie?.poster_path == undefined ? "" : movie?.poster_path;
        this.title = movie?.title == undefined ? "" : movie.title;
        this.video = movie?.video == undefined ? false : movie.video;
        this.vote_average = movie?.vote_average == undefined ? 0 : movie.vote_average;
        this.vote_count = movie?.vote_count == undefined ? 0 : movie.vote_count;
    }
 }
 export class Sala implements ISala{
    id: number | null;
    idCine: number | null;
    nombreSala: string | null;
    nombreCine: string | null;
    butacas: number | null;
   
    constructor(sala?: Sala){
       this.id = sala?.id == undefined ? null : sala.id;
       this.idCine = sala?.idCine == undefined ? null : sala.idCine;
       this.nombreSala = sala?.nombreSala == undefined ? null : sala.nombreSala;
       this.nombreCine = sala?.nombreCine == undefined ? null : sala.nombreCine;
       this.butacas = sala?.butacas == undefined ? null : sala.butacas;
    }
}
 export class Ticket implements ITicket {
    id: number | null;
    idUsuario: number | null;
    idFuncion: number | null;
    fecha: Date | null;
    cantidadEntradas: number | null;
    nombrePelicula: string | null;

    constructor(ticket?: Ticket) {
        this.nombrePelicula = ticket?.nombrePelicula == undefined ? null : ticket.nombrePelicula
        this.id = ticket?.id == undefined ? null : ticket.id;
        this.idUsuario = ticket?.idUsuario == undefined ? null : ticket.idUsuario;
        this.idFuncion = ticket?.idFuncion == undefined ? null : ticket.idFuncion;
        this.fecha = ticket?.fecha == undefined ? null : ticket.fecha;
        this.cantidadEntradas = ticket?.cantidadEntradas == undefined ? null : ticket.cantidadEntradas;
    }
}

export class Showtime implements IShowtime {
    id: number | null;
    idPelicula: number | null;
    nombrePelicula: string | null;
    sala: number | null;
    horarios: string | null;
    entradasDisponible: number | null;
    fecha : Date | Date
    precio : number | null
    
    constructor(showtime?: Showtime) {
        this.precio = showtime?.precio == undefined ? null : showtime.precio;
        this.id = showtime?.id == undefined ? null : showtime.id;
        this.fecha = showtime?.fecha == undefined ? new Date() : showtime.fecha
        this.idPelicula = showtime?.idPelicula == undefined ? null : showtime.idPelicula;
        this.nombrePelicula = showtime?.nombrePelicula == undefined ? null : showtime.nombrePelicula;
        this.sala = showtime?.sala == undefined ? null : showtime.sala;
        this.horarios = showtime?.horarios == undefined ? null : showtime.horarios;
        this.entradasDisponible = showtime?.entradasDisponible == undefined ? null : showtime.entradasDisponible;
    }
}

export class Genre implements IGenre
{
    id: number | null;
    name: string | null;

    constructor(genre? : Genre)
    {
        this.id = genre?.id == undefined ? null : genre.id;
        this.name = genre?.name == undefined ? null : genre.name;
    }
}
