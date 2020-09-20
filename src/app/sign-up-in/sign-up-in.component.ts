import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {UsersService} from '../servisi/users.service'
import { Korisnik } from '../modelipodataka/korisnik';
import { Konobar } from '../modelipodataka/konobar';
import { Router } from '@angular/router';
import { faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

//import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-sign-up-in',
  templateUrl: './sign-up-in.component.html',
  styleUrls: ['./sign-up-in.component.css']
})
export class SignUpInComponent implements OnInit {

  eye = faEye;
  rHidden = true;
  eyeS = faEyeSlash
  hideR = true;
  hideL = true;
  fHide = true;
  signupForm : FormGroup;
  loginForm : FormGroup;
 
  submitted = false;
  loginTry = false;
  loading = false;
  loginLoad = false;
  newUser: Konobar = null;
  oldCustomer: Korisnik = null;

  constructor(private fb: FormBuilder, private us: UsersService, protected router:Router) { }

  ngOnInit(): void {
    
    this.createLoginForm();
    
  }

  getAuth() {
    return this.us.checkAuth();
  }

  

  get logInfo() {
    return this.loginForm.controls;
  }
  

  createLoginForm() {
    this.loginForm = this.fb.group({
      emailU: ['', Validators.required],
      passwordU: ['', Validators.required]
    })
  }


  refresh(): void {
    window.location.reload();
}
  

  onLogin() {
    this.loginTry=true;
    if(this.loginForm.invalid) {
      return;
    }
    this.loginLoad=true;
    this.oldCustomer = new Korisnik(this.logInfo.emailU.value,this.logInfo.passwordU.value);
    this.us.login(this.oldCustomer).subscribe((data:any) =>  {console.log(JSON.stringify(data))
        sessionStorage.setItem('admin',JSON.stringify(data.admin));
        sessionStorage.setItem('idRadnika',JSON.stringify(data.idRadnika));
        sessionStorage.setItem('user',data.email);
        sessionStorage.setItem('codeA',JSON.stringify(data.pinKod));
      //  sessionStorage.setItem('admin',JSON.stringify(data.admin))
      this.getAuth();
      this.router.navigate(['/']);
      this.refresh();
    },
    err => console.log(JSON.stringify(err)));
    this.loginLoad = false;
  }

 

   /*resetRequest() {
    if(this.logInfo.emailU.value == "") {
      alert("Molimo Vas da unesete e-mail adresu");
    }
    else {
    this.rHidden = false;
    this.resetForm.patchValue({
      emailR: this.logInfo.emailU.value
    })
    let email = this.rs.emailR.value;
    this.us.tryReset(email).subscribe(res => {
      console.log(res);
      alert("Proverite mejl, poslali smo Vam kod za resetovanje lozinke.");
    }), err => {
      console.log(err);
      alert("Proverite unetu e-mail adresu.")
    }
   }
  }
*/
  
    
    
}
