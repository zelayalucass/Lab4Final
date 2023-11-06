import { IUser } from "./Interface";

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