import {Konobar} from './konobar';
import {Porudzbina} from './porudzbina';
import { Stolovi } from './stolovi';

export class Racun {
    idRacuna:number;
    datumPlacanja:string;
    valuta:string;
    porudzbina:number;
    idRadnika:number;
    cenaUkupna:number;
    sto:number;
    placen:number;


    constructor(idRacuna:number,datumPlacanja:string,
        valuta:string,porudz:Porudzbina,sto:Stolovi,konobar:number,cenaUkupna:number,placen:number){

        this.idRacuna=idRacuna;
        this.datumPlacanja=datumPlacanja;
        this.valuta=valuta;
        this.porudzbina=porudz.idPorudz;
        this.idRadnika=konobar; 
        this.sto=sto.sifraStola;
        this.cenaUkupna=cenaUkupna; 
        this.placen=placen;          

    }
}
