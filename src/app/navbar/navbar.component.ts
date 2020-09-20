import { Component, OnInit } from '@angular/core';
import {UsersService} from '../servisi/users.service';
import {Konobar} from '../modelipodataka/konobar'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  konobar : Konobar = null;
  sme=false;

  constructor(private userService:UsersService) {
   }

  ngOnInit(): void {
    this.konobar = this.getMe();
  }

  getAuth() {
    return this.userService.checkAuth();
  }


  checkAdmin() {
    return this.userService.checkAdmin();

  }

  

  getMe() {
    let token = sessionStorage.getItem('user');
    this.userService.getMe(token).subscribe(konobar => {this.konobar = konobar
      console.log('Zdravo!'); 
   },err => {
      console.log(err);
      
    })
    this.sme =true;
    return this.konobar;
  }

 // getKonobara() {
  ///  return this.getUser().subscribe((konobar: Konobar) => {
  //    this.konobar = konobar});
  //}
  

  logout() {
    return this.userService.logout(),this.getAuth();
            
    
  }

}
