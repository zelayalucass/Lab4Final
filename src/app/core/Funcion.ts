export class Funcion{
    idFuncion: number;
    idPelicula: number;
    nombrePelicula: string;
    sala: number;
    horarios: string;

    constructor(idFuncion: number, idPelicula: number, nombrePelicula: string, sala: number, horarios: string){
        this.idFuncion = idFuncion;
        this.idPelicula = idPelicula;
        this.nombrePelicula = nombrePelicula;
        this.sala = sala;
        this.horarios = horarios;
    }

}