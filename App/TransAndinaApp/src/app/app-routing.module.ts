import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {HomeComponent} from "./home/home.component";
import {VehiclesComponent} from "./vehicles/vehicles.component";
import {ProgrammingComponent} from "./route_programming/programming.component";

const routes: Routes = [

  { path: '',  redirectTo :'auth/login', pathMatch: 'full'},
  { path: 'auth/login', component: LoginComponent },
  { path: 'home',  component: HomeComponent , pathMatch: 'full'},
  { path: 'vehiculos',  component: VehiclesComponent , pathMatch: 'full'},
  { path: 'programacion-rutas',  component: ProgrammingComponent , pathMatch: 'full'},
  { path: '**', redirectTo: '/', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
