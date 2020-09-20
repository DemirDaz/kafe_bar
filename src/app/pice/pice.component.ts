import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NabavkaItem } from '../modelipodataka/nabavka-item';
import { Pice} from '../modelipodataka/pice'
import { NabavkaService} from '../servisi/nabavka.service'
import { PicaService} from '../servisi/pica.service'


@Component({
  selector: 'app-pice',
  templateUrl: './pice.component.html',
  styleUrls: ['./pice.component.css']
})
export class PiceComponent implements OnInit {
 
  
  values = '';
  pice: Pice;
  pica : Pice[] = [];
  odabrani: Pice[] = [];
  nab: NabavkaItem[] = [];

  constructor(public nabavkaService: NabavkaService,private picaService: PicaService) { }

  ngOnInit(): void {
    this.getSvaPica();
  }
  
    //console.log(dataB);
  
  public getItem() {
  this.nab=this.nabavkaService.getCart();
   }


   //NESTO NE REAGUJE NA OVO DUGME! 
  public izmeniZalihu(): void { 
    this.nabavkaService.updateZaliha();
    this.getItem();
    this.nab.forEach(element => {
      this.nabavkaService.makeUpdate(element).subscribe((neki: NabavkaItem) => {console.log(JSON.stringify(neki)) 
    })
    
  });
  alert("Uspesno dopunjena zaliha!");
    location.reload();
}

    
 uvecaj(pice) { this.nabavkaService.addToNabavka(pice);}
 smanji(pice) {this.nabavkaService.removeFromNabavka(pice);}
  

  

  getSvaPica() {
    this.picaService.getPica().subscribe((pica: Pice[]) => {
      this.pica = pica})
  }

 


}
