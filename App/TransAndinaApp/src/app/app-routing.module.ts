import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./auth/login/login.component";


const routes: Routes = [

  { path: '',  redirectTo :'auth/login', pathMatch: 'full'},
  { path: 'home',  component: HomeComponent , pathMatch: 'full'},
  { path: 'auth/login', component: LoginComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
