import {Pice} from './pice'

export class Zaliha {
    idZalihe:number;
    kolicina:number;
    prodajnaCena:number;
    idPica:number;

    constructor(idZalihe:number,kolicina:number,
        prodajnaCena:number,pice:Pice) {
            
            this.idZalihe=idZalihe;
            this.kolicina=kolicina;
            this.prodajnaCena=prodajnaCena;
            this.idPica= pice.idPica;
    }
}
