export class Ticket{
    idTicket: number;    
    idUsuario: number;
    idFuncion: number;
    fecha: Date;
    cantidadEntradas: number;

    constructor(idTicket: number, idUsuario: number, idFuncion: number, fecha: Date, cantidadEntradas: number){
        this.idTicket = idTicket;
        this.idUsuario = idUsuario;
        this.idFuncion = idFuncion;
        this.fecha = fecha;
        this.cantidadEntradas = cantidadEntradas;
    }
}