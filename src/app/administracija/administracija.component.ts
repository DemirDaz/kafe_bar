import { Component, OnInit } from '@angular/core';
import { Konobar } from '../modelipodataka/konobar';
import { UsersService } from '../servisi/users.service';
import {AdminService} from '../servisi/admin.service'
import { UslugaService } from '../servisi/usluga.service';
import { Racun } from '../modelipodataka/racun';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-administracija',
  templateUrl: './administracija.component.html',
  styleUrls: ['./administracija.component.css']
})
export class AdministracijaComponent implements OnInit {

  radnici:Konobar[] = [];
  racuni:Racun[] = [];
  moze=false;
  registruje=false;
  newUser: Konobar;
  eye = faEye;
  rHidden = true;
  eyeS = faEyeSlash
  hideR = true;
  hideL = true;
  fHide = true;
  signupForm : FormGroup;

  constructor(private adm:AdminService,private fb: FormBuilder,private us: UsersService) { }

  ngOnInit(): void {
    this.getRadnike();
    this.getRacune();
    this.createSignupForm();
  }

  get scs() {
    return this.signupForm.controls;
  }


  createSignupForm() {
     this.signupForm = this.fb.group({
       name: ['', Validators.required],
       email: ['', Validators.required],
       password: ['', Validators.required],
       address: ['', Validators.required],
       phoneNum: ['', Validators.required]
     })
  }

 getRadnike() {
 this.adm.getRadnike().subscribe((radnici:Konobar[]) =>{
 this.radnici=radnici
 },err => console.log(JSON.stringify(err)));
 this.moze=true;
 }

 newRadnik() {
  this.registruje=true;
  if(this.signupForm.invalid) {
    return;
  }
  
  this.newUser = new Konobar(null,this.scs.name.value,this.scs.address.value,this.scs.phoneNum.value,
  this.scs.email.value,this.scs.password.value);
  this.us.register(this.newUser)
  .subscribe((user: Konobar) => {console.log(JSON.stringify(user.pIme)+'se ulogovao')
 },err => console.log(JSON.stringify(err)))
  this.registruje=false;
  location.reload();
  /*let auth = {
     email: user.email,
     pin: user.pinKod
   };
     sessionStorage.setItem('admin',JSON.stringify(user.admin));
     sessionStorage.setItem('idRadnika',JSON.stringify(user.idRadnika));
   sessionStorage.setItem('user',auth.email);
   sessionStorage.setItem('codeA',JSON.stringify(auth.pin));
   this.getAuth();
   this.router.navigate(['/']);
   this.refresh(); */
}

 


 getRacune() {
   this.adm.getRacuni().subscribe((racuni:Racun[]) =>{
    this.racuni=racuni
    },err => console.log(JSON.stringify(err)));
    this.moze=true;
 }

 Izmeni(radn:Konobar){
  this.registruje=true;
  if(this.signupForm.invalid) {
    return;
  }
  this.newUser = new Konobar(radn.idRadnika,this.scs.name.value,this.scs.address.value,this.scs.phoneNum.value,
  this.scs.email.value,this.scs.password.value);
  this.adm.updateRadnik(this.newUser)
  .subscribe((user: Konobar) => {console.log(JSON.stringify("Uspšno izmenjen radnik!"+user.pIme))
 },err => console.log(JSON.stringify(err)))
  this.registruje=false;
  location.reload();
 }

 Obrisi(id:number)
 { 
   this.adm.deleteRadnik(id).subscribe(response =>
  {console.log(response);},err => console.log(err));
  location.reload();
  
  
 }

 Izbrisi(id:number)
 { 
   this.adm.deleteRacun(id).subscribe(response =>
  {console.log(response)},err => console.log(err));
  location.reload();
  
 }

}
