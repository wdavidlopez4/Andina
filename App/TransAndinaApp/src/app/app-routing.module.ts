import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./auth/login/login.component";
import {ListRouteComponent} from "./route/list-route/list-route.component";
import {DriversComponent} from "./drivers/drivers.component";
import {ListVehicleComponent} from "./vehicle/list-vehicle/list-vehicle.component";
import {ListProgrammingComponent} from "./route_programming/list-programming/list-programming.component";


const routes: Routes = [

  { path: '',  redirectTo :'auth/login', pathMatch: 'full'},
  { path: 'auth/login', component: LoginComponent },
  { path: 'home',  component: HomeComponent , pathMatch: 'full'},
  { path: 'conductores',  component: DriversComponent , pathMatch: 'full'},
  { path: 'route/list-route', component: ListRouteComponent },
  { path: 'vehicle/list-vehicle', component: ListVehicleComponent },
  { path: 'programming/list-programming', component: ListProgrammingComponent },

  { path: '**', redirectTo: '/', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
