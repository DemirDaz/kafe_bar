import { Injectable } from '@angular/core';

import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessagerService {

  subject =  new Subject()
  messages: string[] = [];

  constructor() { }

  sendMessage(item) {
    console.log(item)
  this.subject.next(item) //Trigger dogadjaja
  }

  add(message: string) {
    this.messages.push(message);
    console.log(message);
  }

  getMessage() {
    return this.subject.asObservable()
  }
}
