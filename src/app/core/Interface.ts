import { OriginalLanguage } from "./original-language";

export interface IUser{
    id:number|null,
    username: string|null,
    email: string|null,
    password : string|null

}

export interface ICinema {
    id: number | null;
    nombre: string | null;
    direccion: string | null;
    cantidadSalas: number | null;
  }

  export interface IMovie{

    adult:             boolean | null;
    backdrop_path:     string | null;
    genre_ids:         number[] | null;
    id:                number | null;
    original_language: OriginalLanguage | null;
    original_title:    string | null;
    overview:          string | null;
    popularity:        number | null;
    poster_path:       string | null;
    release_date:      Date | null;
    title:             string | null;
    video:             boolean | null;
    vote_average:      number | null;
    vote_count:        number | null;
  }

 export interface ITicket{
    id: number | null;    
    idUsuario: number | null;
    idFuncion: number | null;
    fecha: string | null;
    nombrePelicula : string | null;
    cantidadEntradas: number | null;
 }

 export interface IShowtime{
    idPelicula: number | null;
    nombrePelicula: string | null;
    sala: number | null;
    horarios: string | null;
    entradasDisponible: number | null;
    fecha : string | null
 }

 export interface ISala
 {
    id: number | null;
    idCine: number | null;
    nombreSala: string | null;
    nombreCine: string | null;
    butacas: number | null;

 }

 export interface IGenre{
   id: number | null;
   name: string | null;
  }