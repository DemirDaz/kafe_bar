import { Component, OnInit } from '@angular/core';
import {PiceComponent} from '../pice/pice.component';
@Component({
  selector: 'app-zaliha',
  templateUrl: './zaliha.component.html',
  styleUrls: ['./zaliha.component.css']
})
export class ZalihaComponent implements OnInit {
Pice : PiceComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
