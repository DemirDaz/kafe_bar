import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Pice } from '../modelipodataka/pice'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import {catchError,tap} from 'rxjs/operators'
import {MessagerService} from 'src/app/servisi/messager.service'
import {Konobar} from '../modelipodataka/konobar'
import { Korisnik } from '../modelipodataka/korisnik'
import {signupURL, loginURL,resetCURL,userURL} from 'src/app/config/api'
//import {makeOrderURL, orderItemURL, orderInfoURL, myProfileURL, myOrdersURL, updateMeURL, resetURL, resetCURL} from 'src/app/config/api'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  myUser = null;
  myAdmin =  null;
  auth:boolean = false;
  defaultCode = 818352;

 constructor(private http: HttpClient,private msg: MessagerService, protected router: Router) { }

 register(user: Konobar):Observable<Konobar>{
  return this.http.post<Konobar>(signupURL,JSON.stringify(user)).pipe(
    tap(_=> alert('Dodat novi radnik!')),
      catchError(this.handleError))
}

login(customer: Korisnik):Observable<any> {
   return this.http.post<Korisnik>(loginURL,JSON.stringify(customer)).pipe(
    tap(_=> this.log('login success!')),
      catchError(this.handleError))
}



changePassword(data) {
  return this.http.post(resetCURL,JSON.stringify(data)).pipe(
    tap(_=> this.log('change request success!')),
    catchError(this.handleError)
  )
}

private log(message: string) {
  this.msg.add(`User service: ${message}`);
}

checkAuth() {
  try{
  let token = sessionStorage.getItem('user');
 this.myUser = token;
  }
  catch(e) {
    this.myUser = null;
  }
  if(this.myUser!==null) {
    this.auth = true;
  }
  else {
    this.auth=false;
  }
  return this.auth;
}

checkAdmin() {
  try{
  let token = JSON.parse(sessionStorage.getItem('admin'));
  this.myAdmin = token;
  }
  catch(e) {
    this.myAdmin = null;
  }
  if(this.myAdmin!=0) {
    this.auth = true;
  }
  else {
    this.auth=false;
  }
  return this.auth;
}

logout() {
  sessionStorage.removeItem('admin');
  sessionStorage.removeItem('idRadnika');
  sessionStorage.removeItem('user');
  sessionStorage.removeItem('codeA');
  this.auth=false;
}



currentUser() {
  let token = sessionStorage.getItem('user');
  //let me = CryptoJS.AES.decrypt(token,'2608981412').toString(CryptoJS.enc.Utf8);
  return token;
}


getMe(email: string) :Observable<Konobar>{
  return this.http.get<any>(`${userURL}?email=${email}`).pipe(
    tap(_=> this.log('Preuzeo profil radnika!')),
    catchError(this.handleErrorLR)
  )
}

//hendler greskiii
handleError(error: HttpErrorResponse) {
  console.log("Error! Somtehing went wrong.",error);
  alert(JSON.stringify(error.error))
  return throwError("Something went wrong");
 }
 
 handleErrorLR() {
   console.log("Error! Somtehing went wrong. User does not exits");
   alert(JSON.stringify("Korisnik ne postoji"));
   try {
    // sessionStorage.removeItem('user');
   }
   catch(e) {
     console.log(e);
   }
   return throwError("Something went wrong");
 }
}
