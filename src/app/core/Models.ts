import { IUser } from "./Interface";

export class User implements IUser
{
    id: number | null;
    username: string | null;
    email: string | null;
    password: string | null;

    constructor(private user?:any)
    {
        this.id = user != null? user.id             : undefined;
        this.username = user != null? user.username : undefined;
        this.email = user != null? user.email       : undefined;
        this.password = user != null? user.password : undefined;
    }
    
}