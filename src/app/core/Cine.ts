export class Cine {
    id: number;
    nombre: string;
    direccion: string;
    cantidadSalas: number;

    constructor(id: number, nombre: string, direccion: string, cantidadSalas: number){
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.cantidadSalas = cantidadSalas;
    }
}