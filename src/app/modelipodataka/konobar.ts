export class Konobar {

    idRadnika: number;
    pIme: string;
    adresaStan : string;
    brMob: string;
    email: string;
    pinKod : string;
    admin: boolean;
    

    constructor(idRadnika:number,pIme:string,
        adresaStan:string,brMob:string,
        email:string,pinKod:string) {
            
            this.idRadnika = idRadnika;
            this.pIme = pIme;
            this.adresaStan = adresaStan;
            this.brMob = brMob;
            this.email = email;
            this.pinKod = pinKod;
            this.admin = false;
    }

    
}
