import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PorudzbinaComponent } from './porudzbina/porudzbina.component';
import { ZalihaComponent } from './zaliha/zaliha.component';
import {MatIconModule} from '@angular/material/icon';
import { PiceComponent } from './pice/pice.component';
import {MatCardModule} from '@angular/material/card';
import { SignUpInComponent } from './sign-up-in/sign-up-in.component';
import {HttpClientModule} from '@angular/common/http'
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {MatInputModule} from '@angular/material/input';
import { NaruciComponent } from './naruci/naruci.component';
import {MatTableModule} from '@angular/material/table';
import { NaplatiComponent } from './naplati/naplati.component';
import { AdministracijaComponent } from './administracija/administracija.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent,
    SignUpInComponent,
    LoginComponent,
    PorudzbinaComponent,
    ZalihaComponent,
    PiceComponent,
    NaruciComponent,
    NaplatiComponent,
    AdministracijaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
