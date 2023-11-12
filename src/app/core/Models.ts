import { IGenre, IUser } from "./Interface";
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
