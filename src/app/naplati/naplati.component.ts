import { Component,Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData} from '../interfejsi/dialog';

@Component({
  selector: 'app-naplati',
  templateUrl: './naplati.component.html',
  styleUrls: ['./naplati.component.css']
})
export class NaplatiComponent {

  datah:number = JSON.parse(localStorage.getItem("racun"));
  

  constructor(
    public dialogRef: MatDialogRef<NaplatiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
