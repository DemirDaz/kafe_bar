import { Pice } from './pice';
import { Zaliha } from './zaliha';

export class Kaficzaliha {
    idZaliha: number;
    idPica: number;
    imePica: string;
    fotografijaPica : string;
    tipPica: string;
    kolicina:number;
    prodajnaCena:number;

    constructor(pice:Pice,zaliha:Zaliha) {
        this.idZaliha=zaliha.idZalihe;
        this.idPica=pice.idPica;
        this.imePica=pice.imePica;
        this.fotografijaPica=pice.fotografijaPica;
        this.tipPica=pice.tipPica;
        this.kolicina=zaliha.kolicina;
        this.prodajnaCena=zaliha.prodajnaCena;
    }
}
