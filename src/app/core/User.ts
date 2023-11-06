export class User{
    idUsuario: number;
    username: string;
    mail: string;
    password: string;
    admin: boolean;

    constructor(idUsuario: number, username: string, mail: string, password: string, admin: boolean){
        this.idUsuario = idUsuario;
        this.username = username;
        this.mail = mail;
        this.password = password;
        this.admin = admin;
    }
}