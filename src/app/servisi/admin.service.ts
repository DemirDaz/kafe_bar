import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { deleteKonobar, deleteRacun, getAllRacuni, getKonobari, newKonobar, updateKonobar } from '../config/api';
import { Konobar } from '../modelipodataka/konobar';
import { Racun } from '../modelipodataka/racun';
import { MessagerService } from './messager.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient,private msg: MessagerService, protected router: Router) { }

  getRadnike(): Observable<Konobar[]> {
    return this.http.get<Konobar[]>(getKonobari).pipe(
      tap(_=> this.log('Preuzeti radnici')),
      catchError(this.handleError<Konobar[]>('getKonobari',[]))
    );
  }
  createRadnik(konobar:Konobar):Observable<Konobar> {
    return this.http.post<Konobar>(newKonobar,JSON.stringify(konobar)).pipe(
      tap(_=> alert('Radnik dodat!')),
        catchError(this.handleError))
  }
  
  updateRadnik(konobar:Konobar){
    return this.http.post<Konobar>(updateKonobar,JSON.stringify(konobar)).pipe(
      tap(_=> alert('Radnik izmenjen!')),
        catchError(this.handleErrorTwo))
  }
  
  deleteRadnik(id:number) {
    return this.http.get<Konobar>(`${deleteKonobar}?id=${id}`).pipe(
      tap(_=> alert('Radnik izbrisan!')),
        catchError(this.handleErrorTwo))
  }

  deleteRacun(id:number) {
    return this.http.get<Racun>(`${deleteRacun}?id=${id}`).pipe(
      tap(_=> alert("Račun izbrisan!")),
        catchError(this.handleErrorTwo));
  }

  

  getRacuni(): Observable<Racun[]> {
    return this.http.get<Racun[]>(getAllRacuni).pipe(
      tap(_=> this.log('Preuzet racuni')),
      catchError(this.handleError<Racun[]>('getAllRacuni',[]))
      );
  }


  private log(message: string) {
    this.msg.add(`Product service: ${message}`);
  }

private handleError<T>(operation = 'operation', result?: T) {
   return (error: any): Observable<T> => {
 
     console.error(error); 
 
     this.log(`${operation} failed: ${error.message}`);
 
     return of(result as T);
   };
 }

 handleErrorTwo(error: HttpErrorResponse) {
  console.log("Error! Something went wrong.",error);
  alert(JSON.stringify(error.error))
  return throwError("Something went wrong");
 }


}
