import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PorudzbinaComponent } from './porudzbina/porudzbina.component';
import {SignUpInComponent} from './sign-up-in/sign-up-in.component';

const routes: Routes = [
  { path: 'sign-up-in', component: SignUpInComponent},
  {path: 'nabavka', component: PorudzbinaComponent},
  {path: '', redirectTo: '', pathMatch: 'full'}, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
