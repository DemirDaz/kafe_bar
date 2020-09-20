export class Korisnik {
    email:string;
    pin:string;
    admin:boolean;

    constructor(email:string, password: string) {
        this.email=email;
        this.pin=password;
        this.admin=false;
    }
}
