import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginService} from "./Service/login/login-service";
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { CommonModule} from "@angular/common";
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SharedModule } from './shared/shared.module';
import { ListRouteComponent } from './route/list-route/list-route.component';
import { CreateRouteDialogComponent } from './route/create-route-dialog/create-route-dialog.component';
import { EditRouteDialogComponent } from './route/edit-route-dialog/edit-route-dialog.component';
import { CreateStopDialogComponent } from './route/create-stop-dialog/create-stop-dialog.component';
import { EditStopDialogComponent } from './route/edit-stop-dialog/edit-stop-dialog.component';
import { ListVehicleComponent } from './vehicle/list-vehicle/list-vehicle.component';
import { CreateVehicleDialogComponent } from './vehicle/create-vehicle-dialog/create-vehicle-dialog.component';
import { EditVehicleDialogComponent } from './vehicle/edit-vehicle-dialog/edit-vehicle-dialog.component';
import { RouteService} from "./Service/route/route-service";
import { VehicleService} from "./Service/vehicle/vehicle-service";
import { AddProgrammingDialogComponent } from './route/add-programming-dialog/add-programming-dialog.component';
import { ProgrammingService} from "./Service/programming/programming-service";
import { ListProgrammingComponent } from './route_programming/list-programming/list-programming.component';
import { EditProgrammingDialogComponent } from './route_programming/edit-programming-dialog/edit-programming-dialog.component';
import { CreatePersonDialogComponent} from './persons/create-persons-dialog/create-persons-dialog.component';
import { EditPersonDialogComponent} from './persons/edit-persons-dialog/edit-persons-dialog.component';
import { ListPersonComponent} from './persons/list-persons/list-persons-dialog.component';
import { PersonService} from './Service/persons/person-service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HomeComponent,
    ListRouteComponent,
    CreateRouteDialogComponent,
    EditRouteDialogComponent,
    CreateStopDialogComponent,
    EditStopDialogComponent,
    ListVehicleComponent,
    CreateVehicleDialogComponent,
    EditVehicleDialogComponent,
    ListProgrammingComponent,
    AddProgrammingDialogComponent,
    EditProgrammingDialogComponent,
    CreatePersonDialogComponent,
    EditPersonDialogComponent,
    ListPersonComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [LoginService, RouteService,VehicleService,ProgrammingService, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
