import {Konobar} from './konobar'

export class Stolovi {
    sifraStola: number;
    zauzet: number;
    opisStola: string;
    brStolica: number;
    idRadnika: number;

    constructor(sifraStola:number,opisStola:string,
        brStolica:number,konobar:Konobar){
            this.sifraStola=sifraStola;
            this.zauzet=0;
            this.opisStola=opisStola;
            this.brStolica=brStolica;
            this.idRadnika=konobar.idRadnika;
        }
}
