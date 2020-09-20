import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { deletePorudzbina, getPorudzbine, getRacuni, getstoloviURL, getzalihaURL, newPorudzbina, newRacun, setStavka, updateRacun, updateSto, updateZaliha, updateZalihaProdaja } from '../config/api';
import { Stolovi } from '../modelipodataka/stolovi';
import { Zaliha } from '../modelipodataka/zaliha';
import {catchError,tap} from 'rxjs/operators'
import {of} from 'rxjs'
import { MessagerService } from './messager.service';
import { Kaficzaliha } from '../modelipodataka/kaficzaliha';
import { Pice } from '../modelipodataka/pice';
import {Stavkaporudzbine} from '../modelipodataka/stavkaporudzbine';
import { Porudzbina } from '../modelipodataka/porudzbina';
import { Racun } from '../modelipodataka/racun';

@Injectable({
  providedIn: 'root'
})
export class UslugaService {

  constructor(private http: HttpClient, private msg: MessagerService) { }
  porucuje :boolean;
  placa :boolean;

  createZaliha(ka : Kaficzaliha[],za: Zaliha[],pi : Pice[]) {
    za.forEach(j => {
      pi.forEach(i => { if(j.kolicina>0 && j.idPica==i.idPica){
        var novi = new Kaficzaliha(i,j);
        //console.log(novi);
        ka.push(novi);
      };
      })
    })
  }

  deletePorudzbina(id: number):Observable<any>{
    return this.http.get<Porudzbina>(`${deletePorudzbina}?id=${id}`).pipe(
      tap(_=> this.log('Porudzbina obrisana!')),
        catchError(this.handleError))
  }

  
  createPorudzbina(porudz : Porudzbina): Observable<Porudzbina> {
    return this.http.post<Porudzbina>(newPorudzbina,JSON.stringify(porudz)).pipe(
      tap(_=> this.log('Nova porudzbina:')),
        catchError(this.handleError))
  }

  createRacun(racun : Racun): Observable<Racun> {
    return this.http.post<Racun>(newRacun,JSON.stringify(racun)).pipe(
      tap(_=> this.log('Novi racun:')),
        catchError(this.handleErrorTwo))
  }

  getRacuni(id : number): Observable<Racun[]> {
    return this.http.get<Racun[]>(`${getRacuni}?id=${id}`).pipe(
      tap(_=> this.log('fetched porudzbine')),
      catchError(this.handleError<Racun[]>('getRacuni',[]))
      );
  }

  
  updateZalihe(zaliha : Zaliha): Observable<Zaliha> {
    return this.http.post<Zaliha>(updateZalihaProdaja,JSON.stringify(zaliha)).pipe(
      tap(_=> this.log('Izmenjena zaliha.')),
        catchError(this.handleError))
  }


  updateRacun(racun : Racun): Observable<Racun> {
    return this.http.post<Racun>(updateRacun,JSON.stringify(racun)).pipe(
      tap(_=> this.log('Plaćen racun.')),
        catchError(this.handleError))
  }

  updateSto(sto : Stolovi):Observable<Stolovi> {
    return this.http.post<Stolovi>(updateSto,JSON.stringify(sto)).pipe(
      tap(_=> this.log('Sto Izmenjen.')),
        catchError(this.handleErrorTwo))

  }


  getPorudzbine() : Observable<Porudzbina[]> {
    return this.http.get<Porudzbina[]>(getPorudzbine).pipe(
      tap(_=> this.log('fetched porudzbine')),
      catchError(this.handleError<Porudzbina[]>('getPorudzbine',[]))
      );

  }

  
  createStavkaPorudzbine(stavka: Stavkaporudzbine):Observable<Stavkaporudzbine> {
      return this.http.post<Stavkaporudzbine>(setStavka,JSON.stringify(stavka)).pipe(
        tap(_=> this.log('Stavka evid. !')),
          catchError(this.handleErrorTwo))
  }


  setTrenutna(sto: Stolovi) {
    localStorage.setItem('trenutna',JSON.stringify(sto));
  }
  getTrenutna():Stolovi {
    var user
    return user = JSON.parse(localStorage.getItem('trenutna'));
  }
  clearTrenutna()
  { localStorage.removeItem('trenutna');}


  getStolovi() : Observable<Stolovi[]> {
    return this.http.get<Stolovi[]>(getstoloviURL).pipe(
      tap(_=> this.log('prikupio stolove!')),
      catchError(this.handleError<Stolovi[]>('getSTolovi',[]))
    );
  }

  setPlaca(s:boolean) {
    localStorage.setItem('placa',JSON.stringify(s));
  }

  getPlaca():boolean {
    var placa;
    return placa = JSON.parse(localStorage.getItem('placa'));}

  setPorucuje(s:boolean) {
    localStorage.setItem('porucuje',JSON.stringify(s));
  }

  getPorucuje():boolean {
    var por;
    return por = JSON.parse(localStorage.getItem('porucuje'));}

  getZaliha() : Observable<Zaliha[]> {
    return this.http.get<Zaliha[]>(getzalihaURL).pipe(
      tap(_=> this.log('preuzeo zalihu')),
      catchError(this.handleError<Zaliha[]>('getProducts',[]))
    );
  }

  private log(message: string) {
    this.msg.add(`Product service: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      
      console.log(error); 
  
     
      this.log(`${operation} failed: ${error.message}`);
  
    
      return of(result as T);
    };
  }
 
  handleErrorTwo(error: HttpErrorResponse) {
   console.log("Error! Somtehing went wrong.",error);
   alert(JSON.stringify(error.error))
   return throwError("Something went wrong");
  }

}
