export interface IUser{
    id:number|null,
    username: string|null,
    email: string|null,
    password : string|null

}

export interface ICinema {
    idCinema: number | null;
    nombre: string | null;
    direccion: string | null;
    cantidadSalas: number | null;
  }

  export interface IMovie{
    idMovie: number | null;
    titulo: string | null;
    duracion: string | null;
    genero: string | null;
    idioma: string | null;
    año: string | null;
    descripcion: string | null;
    imagen: string | null;
  }

 export interface ITicket{
    idTicket: number | null;    
    idUsuario: number | null;
    idFuncion: number | null;
    fecha: Date | null;
    cantidadEntradas: number | null;
 }

 export interface IShowtime{
    idFuncion: number | null;
    idPelicula: number | null;
    nombrePelicula: string | null;
    sala: number | null;
    horarios: string | null;
 }