import { Injectable } from '@angular/core';
import { NabavkaItem } from '../modelipodataka/nabavka-item';
import { Pice } from '../modelipodataka/pice';
import { MessagerService } from './messager.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import {catchError,tap} from 'rxjs/operators'
import { Router } from '@angular/router';
import { updateZaliha } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class NabavkaService {

  pica : Pice[] = [];
  nabavka : NabavkaItem[] = [];
  
  constructor(private http: HttpClient,private msg: MessagerService, protected router: Router) { }
    
    //let dataB = localStorage.getItem('cart');
  
    //console.log(dataB);
   
   
 /* makeOrder(order: Order) : Observable<Order> {
    return this.http.post<Order>(makeOrderURL, JSON.stringify(order)).pipe(
      tap(_=> this.log('order success!')),
      catchError(this.handleError)
    )
  } */

   updateZaliha() { this.saveCart(this.nabavka);
    //this.nabavka.forEach(nabavks => {
    //  this.makeUpdate(nabavks)
    // }); 
  }
  
   makeUpdate(nabav : NabavkaItem) : Observable<NabavkaItem> {
    return this.http.post<NabavkaItem>(updateZaliha,JSON.stringify(nabav)).pipe(
      tap(_=> this.log('Uspesno dopunjena zaliha!')),
      catchError(this.handleError) )
    }

    saveCart(cart: NabavkaItem[]) {
      localStorage.setItem('cart',JSON.stringify(cart));
    }

    getCart(): NabavkaItem[]{
      return this.nabavka;
    }
  addToNabavka(pice: Pice) {
    let inCart = false;

    for(let i in this.nabavka) {
      if(this.nabavka[i].idPica === pice.idPica) {
        this.nabavka[i].kolicina++;
        inCart = true;
        //alert("Artikal se nalazi u korpi, kvantitet je promenjen.")
        break;
      }
  }
    if(!inCart) {
      
      let newItem = new NabavkaItem(pice,1);
      newItem.idPica = pice.idPica;
      newItem.kolicina=1;
      this.nabavka.push(newItem);
      alert("Dodato u korpu!");
  }
}

removeFromNabavka(pice: Pice) {
  let inCart = false;

  for(let i in this.nabavka) {
    if(this.nabavka[i].idPica === pice.idPica && this.nabavka[i].kolicina>0) {
      this.nabavka[i].kolicina--;
      inCart = true;
      alert("Artikal se nalazi u korpi, kvantitet je promenjen.")
      break;
    }
}
  if(!inCart) {
    
    alert("Nemate ovog artikla u porudzbini!")
}
}
private log(message: string) {
  this.msg.add(`User service: ${message}`);
}

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

   
  

