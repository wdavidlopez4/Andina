import { Injectable } from '@angular/core';
import {Usuario} from "../../models/Usuario";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Ruta} from "../../models/Ruta";
import {catchError} from "rxjs/operators";
import {Observable, pipe, throwError as observableThrowError} from 'rxjs';
import {Paradas} from "../../models/Paradas";
import {Route} from "@angular/router";
import {Persona} from "../../models/Persona";
import {Vehiculo} from "../../models/Vehiculo";


@Injectable()
export class RouteService {

  private url: string;
  constructor(
    private http: HttpClient) {
    this.url = environment.endpoint;
  }

  getRoutes(): Observable<Ruta[]> {
    return this.http
      .get<Ruta[]>(`${this.url}/ObtenerListaRutas`)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  getPersons(): Observable<Persona[]> {
    return this.http
      .get<Persona[]>(`${this.url}/route/get-persons`)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  getVehicles(): Observable<Vehiculo[]> {
    return this.http
      .get<Vehiculo[]>(`${this.url}/route/get-vehicles`)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  createRoute(data: Ruta): Observable<Ruta> {
    return this.http
      .post<Ruta>(`${this.url}/CrearRuta`, data)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  createProgramingRoute(data: {data: any, rutaId: number}): Observable<any> {
    console.log(data)
    return this.http
      .post<any>(`${this.url}/route/create-programing-route`, data)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  editRoute(data: Ruta): Observable<Ruta> {
    return this.http
      .post<Ruta>(`${this.url}/ActualizarRuta`, data)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  addProgramming(data: Ruta): Observable<Ruta> {
    return this.http
      .post<Ruta>(`${this.url}/route/edit-route`, data)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  deleteRoute(routeId: number): Observable<Route> {
    return this.http
      .delete<Route>(`${this.url}/route/delete-route/${routeId}`)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  activateRoute(routeId: number): Observable<Route> {
    return this.http
      .delete<Route>(`${this.url}/route/activate-route/${routeId}`)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  createStop(data: Paradas): Observable<Paradas> {
    return this.http
      .post<Paradas>(`${this.url}/route/create-stop`, data)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  editStop(data: Paradas): Observable<Paradas> {
    return this.http
      .post<Paradas>(`${this.url}/route/edit-stop`, data)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  deleteStop(stopId: number): Observable<Paradas> {
    return this.http
      .delete<Paradas>(`${this.url}/route/delete-stop/${stopId}`)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

}
