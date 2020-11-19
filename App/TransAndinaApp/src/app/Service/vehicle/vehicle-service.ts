import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Vehiculo} from "../../models/Vehiculo";
import {catchError} from "rxjs/operators";
import {Observable, pipe, throwError as observableThrowError} from 'rxjs';
import {Route} from "@angular/router";


@Injectable()
export class VehicleService {

  private url: string;
  constructor(
    private http: HttpClient) {
    this.url = environment.endpoint;
  }
  
  // constructor(
  //   private http: HttpClient) {
  //   this.url = environment.endpoint;
  // }

  getVehicles(): Observable<Vehiculo[]> {
    return this.http
      .get<Vehiculo[]>("assets/data/vehicleData.json")
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  createVehicle(data: Vehiculo): Observable<Vehiculo> {
    return this.http
      .post<Vehiculo>(`${this.url}/route/create-vehicle`, data)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  editVehicle(data: Vehiculo): Observable<Vehiculo> {
    return this.http
      .post<Vehiculo>(`${this.url}/route/edit-vehicle`, data)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  deleteVehicle(routeId: number): Observable<Route> {
    return this.http
      .delete<Route>(`${this.url}/route/delete-vehicle/${routeId}`)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  activateVehicle(routeId: number): Observable<Route> {
    return this.http
      .delete<Route>(`${this.url}/route/activate-vehicle/${routeId}`)
      .pipe(catchError(error => observableThrowError(error.error)));
  }
}
