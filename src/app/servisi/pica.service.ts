import { Injectable } from '@angular/core';
import { Pice} from '../modelipodataka/pice'
import {catchError,tap} from 'rxjs/operators'
import {of} from 'rxjs'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import {MessagerService} from '../servisi/messager.service'
import {piceURL} from 'src/app/config/api'

@Injectable({
  providedIn: 'root'
})
export class PicaService {

  constructor(private http: HttpClient, private msg: MessagerService) { }

  getPica() : Observable<Pice[]> {
    return this.http.get<Pice[]>(piceURL).pipe(
      tap(_=> this.log('hehe uzeo pica')),
      catchError(this.handleError<Pice[]>('getPica',[]))
    );
  }

  private log(message: string) {
    this.msg.add(`Product service: ${message}`);
  }

 private handleError<T>(operation = 'operation', result?: T) {
   return (error: any): Observable<T> => {
 
     // TODO: send the error to remote logging infrastructure
     console.error(error); // log to console instead
 
     // TODO: better job of transforming error for user consumption
     this.log(`${operation} failed: ${error.message}`);
 
     // Let the app keep running by returning an empty result.
     return of(result as T);
   };
 }

 handleErrorTwo(error: HttpErrorResponse) {
  console.log("Error! Somtehing went wrong.",error);
  alert(JSON.stringify(error.error))
  return throwError("Something went wrong");
 }
}
