export class User {
    _id: string;
    username: string;
    email: string;
    password: string;
    coin: number;
    fio: string;
    items:string[];
    sex: string;
    role:string;
    delered:boolean;

    constructor (username, password, email?:string){
        this.username=username;
        this.password=password;
        this.email=email;
    }
}