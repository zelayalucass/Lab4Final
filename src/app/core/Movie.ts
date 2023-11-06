export class Movie{
    idMovie: number;
    titulo: string;
    duracion: string;
    genero: string;
    idioma: string;
    año: string;
    descripcion: string;
    imagen: string;

    constructor(idMovie: number, titulo: string, duracion: string, genero: string, idioma: string, año: string, descripcion: string, imagen: string){
        this.idMovie = idMovie;
        this.titulo = titulo;
        this.duracion = duracion;
        this.genero = genero;
        this.idioma = idioma;
        this.año = año;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}