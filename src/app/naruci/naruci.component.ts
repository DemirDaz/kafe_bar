import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Kaficzaliha } from '../modelipodataka/kaficzaliha';
import { Pice } from '../modelipodataka/pice';
import { Porudzbina } from '../modelipodataka/porudzbina';
import { Stavkaporudzbine } from '../modelipodataka/stavkaporudzbine';
import { Stolovi } from '../modelipodataka/stolovi';
import { Zaliha } from '../modelipodataka/zaliha';
import { PicaService } from '../servisi/pica.service';
import { UslugaService } from '../servisi/usluga.service';
import {Racun} from '../modelipodataka/racun';
import { UsersService } from '../servisi/users.service';
import { NaplatiComponent } from '../naplati/naplati.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgLocalization } from '@angular/common';


@Component({
  selector: 'app-naruci',
  templateUrl: './naruci.component.html',
  styleUrls: ['./naruci.component.css']
})
export class NaruciComponent implements OnInit {

  zaliha : Zaliha;
  zalihe : Zaliha[] = [];
  pica : Pice[] = [];
  kafic : Kaficzaliha[] = [];
  stavke : Stavkaporudzbine[] = [];
  porudzbine : Porudzbina[] = [];
  moze=false;
  porucuje=true;
  temp: Porudzbina;
  stocic: Stolovi;

  racuni: Racun[] = [];
  zanaplatu=0;

  constructor(public dialog: MatDialog,private uslugasrv: UslugaService, private picaService: PicaService, private usr: UsersService) { }

  ngOnInit(): void {
    this.moze=false;
    this.getZalihu();
    this.getSvaPica();
    this.stocic = this.uslugasrv.getTrenutna();
    this.newPorudzbina();
    setTimeout(() => this.createZaliha(),1500);
    
  }

  newPorudzbina() { 
    var nova = new Porudzbina(null,null);
    this.uslugasrv.createPorudzbina(nova).subscribe((por:Porudzbina) => {
      console.log(JSON.stringify(por));
      this.temp=por;},
    err => console.log(JSON.stringify(err))); 
    let be = this.uslugasrv.getTrenutna();
    be.idRadnika = JSON.parse(sessionStorage.getItem("idRadnika"));
    be.zauzet=1; 
    this.uslugasrv.updateSto(be).subscribe((sto:Stolovi) =>
    {console.log(sto)},err => console.log(err));
    console.log(JSON.stringify(be));
    
  }

  racunajUkupno():number {
    var ukupno=0;
    this.stavke.forEach(stavka => {
      this.kafic.forEach(cena => {
        if(stavka.idZalihe == cena.idZaliha)
        ukupno+=(stavka.kolicina * cena.prodajnaCena);
      });
      
    });
   // console.log(ukupno);
    localStorage.setItem("racun",JSON.stringify(ukupno));
    return ukupno;
    };
  

  newRacun(sto: Stolovi) {

    var nova = new Racun(null,null,null,this.temp,sto,JSON.parse(sessionStorage.getItem("idRadnika")),this.racunajUkupno(),0);
    //console.log(nova);
    
    this.uslugasrv.createRacun(nova).subscribe( (racun : Racun) => {alert(JSON.stringify("Poručeno!"))
    //console.log(racun)
      },
    err => console.log(JSON.stringify(err))); 
  }

  /* kad dodaje i oduzima, menja i stanje zalihe
  public izmeniZalihu(): void { 
    this.nabavkaService.updateZaliha();
    this.getItem();
    this.nab.forEach(element => {
      this.nabavkaService.makeUpdate(element).subscribe((neki: NabavkaItem) => {console.log(JSON.stringify(neki)) 
    })
    
  });
  alert("Uspesno dopunjena zaliha!");
    location.reload();
} */

  
  
  addToPorudzbina(pice : Kaficzaliha) {
    let inCart = false;

    for(let i in this.stavke) {
      if(this.stavke[i].idZalihe === pice.idZaliha) {
        this.stavke[i].kolicina++;
        for(let elem of this.zalihe)
          if(elem.idZalihe = pice.idZaliha)
           {elem.kolicina--;
           break;
          }
        };
        inCart = true;
        break;   // alert("Artikal se nalazi u korpi,izmenjeno.")      
  }
    if(!inCart) {
      
      let newItem = new Stavkaporudzbine(this.stavke.length-1,this.temp,0,this.zalihe[pice.idZaliha-1]);
      newItem.kolicina=1;
      this.stavke.push(newItem);
      for(let elem of this.zalihe)
          if(elem.idZalihe = pice.idZaliha)
           {elem.kolicina--;
           break;
          }
      alert("Dodato u porudzbinu!");
  }
}

removeFromPorudzbina(pice: Kaficzaliha) {
  let inCart = false;

  for(let i in this.stavke) {
    if(this.stavke[i].idZalihe === pice.idZaliha && this.stavke[i].kolicina>0) {
      this.stavke[i].kolicina--;
      for(let elem of this.zalihe)
          if(elem.idZalihe = pice.idZaliha)
           {elem.kolicina++;
           break;
          }
      inCart = true;
      //alert("Artikal se nalazi u korpi, kvantitet je promenjen.")
      break;
    }
}
  if(!inCart) {
    
    alert("Nemate ovog artikla u porudzbini!")
}
}

return() {
  var be = this.uslugasrv.getTrenutna();  //uzmi sto koji je odabran
  be.idRadnika = 0;  //izmeni ga u slobodan
  be.zauzet=0; 
  this.uslugasrv.updateSto(be).subscribe((sto:Stolovi) =>
 {console.log(sto)},err => console.log(err)); 
 this.uslugasrv.deletePorudzbina(this.temp.idPorudz).subscribe(response =>
 {console.log(response)},err => console.log(err));
 this.uslugasrv.clearTrenutna(); //oslobodi da je upaljen sto
 this.zanaplatu=0; 
 this.stavke = [];
 this.temp = null;
 this.setPor(false);
 location.reload();
}

  naplati() {
    if(this.racuni.length > 0) {

     //uzmi sve racune za dati sto
    this.racuni.forEach(element => {
      this.zanaplatu+= element.cenaUkupna;
      this.uslugasrv.updateRacun(element).subscribe((racun:Racun) => {
        console.log(racun.placen)
      }, err => console.log(err)
        );
    });
    
    let be = this.uslugasrv.getTrenutna();  //uzmi sto koji je odabran
    be.idRadnika = 0;  //izmeni ga u slobodan
    be.zauzet=0; 
    this.uslugasrv.updateSto(be).subscribe((sto:Stolovi) =>
    {console.log(sto)},err => console.log(err)); //updejtuj na serveru
    setTimeout(() => this.openDialog(),1500); 
    alert("Račun se obradjuje.") }
    else {
      //U SLUCAJU DA IDE ODMAH NA NAPLATI
       var be = this.uslugasrv.getTrenutna();  //uzmi sto koji je odabran
       be.idRadnika = 0;  //izmeni ga u slobodan
       be.zauzet=0; 
       this.uslugasrv.updateSto(be).subscribe((sto:Stolovi) =>
      {console.log(sto)},err => console.log(err)); 
      this.uslugasrv.deletePorudzbina(this.temp.idPorudz).subscribe(response =>
        {console.log(response)},err => console.log(err)); //obrisi
      this.uslugasrv.clearTrenutna(); //oslobodi da je upaljen sto
      this.zanaplatu=0; 
      this.stavke = [];
      this.temp = null;
      this.setPor(false);
      location.reload();
      return alert("Nema zavedenih racuna za ovaj sto. Zavedite, a onda naplatite."); 
  }
    //Ovde ide skupljanje racuna novi dijalog i to.
     //prikazi cenu za naplatu
    // vrati na 0, jer je placeno
    
  }

  


  openDialog(){  //otvori dijalog, reci cenu i poz!
    const dialogRef = this.dialog.open(NaplatiComponent, {
      width: '300px',
      data: {ukupno : this.zanaplatu}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'+ result)
      location.reload();
      localStorage.removeItem("racun");
    });
      //prebacen iz naplati da bi dao vremena da se saberu racuni
    this.racuni= []; //oslobodi temporary drzac racuna
    this.uslugasrv.clearTrenutna(); //oslobodi da je upaljen sto
    this.zanaplatu=0; 
    this.setPor(false); //ugasi screen za naplatu
    
    
      
    ;

  }

 

  getRacuni()
 {
   this.uslugasrv.getRacuni(this.uslugasrv.getTrenutna().sifraStola).subscribe((rac: Racun[]) =>
   {this.racuni=rac;
    console.log(JSON.stringify(this.racuni))},err => console.log(JSON.stringify(err)))
    setTimeout(() => this.naplati(),1200);
    
 }




  savePorudzbina() {
    this.zalihe.forEach(element => {
      this.uslugasrv.updateZalihe(element).subscribe((zaliha: Zaliha) =>
       console.log(JSON.stringify(zaliha),err => console.log(JSON.stringify(err))))  
    }
    ); 

    this.stavke.forEach(element => {
      this.uslugasrv.createStavkaPorudzbine(element).subscribe((stavka: Stavkaporudzbine) =>
       console.log(JSON.stringify(stavka),err => console.log(JSON.stringify(err))))  
    }
    ); 
   
    this.newRacun(this.uslugasrv.getTrenutna());
    this.stavke = [];
    

    this.getZalihu();
    this.getSvaPica();
    this.uslugasrv.clearTrenutna();
    this.temp = null;
    this.uslugasrv.setPorucuje(false);
    location.reload();
    //Napravi i racun za nju, i stavi u local storage uz sto.
  }


  getPor() {return this.porucuje = this.uslugasrv.getPorucuje();}
  setPor(porucuje) {this.uslugasrv.setPorucuje(porucuje);}

  createZaliha(){
    this.uslugasrv.createZaliha(this.kafic,this.zalihe,this.pica);
    //console.log(this.kafic);
    this.moze = true;
    /*this.zalihe.forEach(j => {
      this.pica.forEach(i => { if(j.kolicina>0 && j.idPica==i.idPica){
        var novi = new Kaficzaliha(i,j);
        console.log(novi);
        this.kafic.push(novi);
      };
      })
    }) */
    
  }

  getSvaPica() {
    this.picaService.getPica().subscribe((pica: Pice[]) => {
      this.pica = pica;
      
    })
  }

  getZalihu() {
    this.uslugasrv.getZaliha().subscribe((zaliha: Zaliha[]) => {
      this.zalihe = zaliha;
      //console.log(this.zalihe);
    })
}
}
