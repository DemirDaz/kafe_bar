import { Component, OnInit } from '@angular/core';
import { Konobar } from '../modelipodataka/konobar';
import { Stolovi } from '../modelipodataka/stolovi';
import { Zaliha } from '../modelipodataka/zaliha';
import { UsersService } from '../servisi/users.service';
import { UslugaService} from '../servisi/usluga.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  stolovi: Stolovi[] = [];
  zaliha: Zaliha[] = [];
  porucuje = false;
  user : Konobar;

  constructor(private uslugasrv: UslugaService, private usr:UsersService) { }

  ngOnInit(): void {
    this.getStolove();
    this.getMe();
    this.getZalihu();
    this.porucuje = false;
  }

  Zauzmi(sto:Stolovi) {
    
    this.uslugasrv.setTrenutna(sto);
    
    this.uslugasrv.setPorucuje(true);

  }

  Oslobodi(sto:Stolovi) {
    
    this.uslugasrv.setTrenutna(sto);
    
    this.uslugasrv.setPlaca(true);

  }

  getMe() {
    let token = sessionStorage.getItem('user');
   // let me = CryptoJS.AES.decrypt(token,'2608981412').toString(CryptoJS.enc.Utf8);
    this.usr.getMe(token).subscribe(konobar => {this.user = konobar
      console.log(JSON.stringify(konobar.pIme)+ " je ulogovan!"); 
    
   },err => {
      console.log(err);
      
    })
  }

  getPor() {return this.uslugasrv.getPorucuje();}
  setPor(porucuje) {this.uslugasrv.setPorucuje(porucuje);}

  getStolove() {
    this.uslugasrv.getStolovi().subscribe((stolovi: Stolovi[]) => {
      this.stolovi = stolovi
      //console.log(this.stolovi);

    })
  }

  getZalihu() {
    this.uslugasrv.getZaliha().subscribe((zaliha: Zaliha[]) => {
      this.zaliha = zaliha
      //console.log(this.zaliha);
    })

}
}
