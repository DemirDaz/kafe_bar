import { Pice } from './pice';

export class NabavkaItem {
    
    idPica: number;
    kolicina: number;
    
    constructor(pice: Pice,kolicina=1) {
            this.idPica = pice.idPica;
            this.kolicina = kolicina;
            
        }
}
