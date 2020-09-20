import {Porudzbina} from './porudzbina';
import {Zaliha} from './zaliha';

export class Stavkaporudzbine {
    redBr:number;
    idPorudz:number;
    kolicina:number;
    idZalihe:number;

    constructor(redBr:number,porudz:Porudzbina,
        kolicina:number,zaliha:Zaliha){

            this.redBr=redBr;
            this.idPorudz=porudz.idPorudz;
            this.kolicina=kolicina;
            this.idZalihe = zaliha.idZalihe;
    }
    
}