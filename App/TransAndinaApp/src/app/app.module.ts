import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import {LoginService} from "./Service/login/login-service";
import { HomeComponent } from './home/home.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ProgrammingComponent } from './route_programming/programming.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SharedModule } from './shared/shared.module';
import { ListRouteComponent } from './route/list-route/list-route.component';
import {RouteService} from "./Service/route/route-service";
import { CreateRouteDialogComponent } from './route/create-route-dialog/create-route-dialog.component';
import { EditRouteDialogComponent } from './route/edit-route-dialog/edit-route-dialog.component';
import { CreateStopDialogComponent } from './route/create-stop-dialog/create-stop-dialog.component';
import { EditStopDialogComponent } from './route/edit-stop-dialog/edit-stop-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    VehiclesComponent,
    ProgrammingComponent,
    HomeComponent,
    ListRouteComponent,
    CreateRouteDialogComponent,
    EditRouteDialogComponent,
    CreateStopDialogComponent,
    EditStopDialogComponent,
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
  providers: [LoginService, RouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
