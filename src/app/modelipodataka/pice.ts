export class Pice {
    idPica: number;
    imePica: string;
    fotografijaPica : string;
    tipPica: string;
    
    constructor(idPica:number,imePica:string,
        fotografijaPica:string, tipPica:string) {
            this.idPica = idPica;
            this.imePica = imePica;
            this.fotografijaPica = fotografijaPica;
            this.tipPica = tipPica;
        }
}
