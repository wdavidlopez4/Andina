import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Programacion} from "../../models/Programacion";
import {catchError} from "rxjs/operators";
import {Observable, pipe, throwError as observableThrowError} from 'rxjs';
import {Route} from "@angular/router";


@Injectable()
export class ProgrammingService {

  private url: string;
  constructor(
    private http: HttpClient) {
    this.url = environment.endpoint;
  }

  getProgrammings(): Observable<Programacion[]> {
    return this.http
      .get<Programacion[]>(`${this.url}/route/get-programmings`)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  createProgramming(data: Programacion): Observable<Programacion> {
    return this.http
      .post<Programacion>(`${this.url}/route/create-programming`, data)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  editProgramming(data: Programacion): Observable<Programacion> {
    return this.http
      .post<Programacion>(`${this.url}/route/edit-programming`, data)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  deleteProgramming(routeId: number): Observable<Route> {
    return this.http
      .delete<Route>(`${this.url}/route/delete-programming/${routeId}`)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  activateProgramming(routeId: number): Observable<Route> {
    return this.http
      .delete<Route>(`${this.url}/route/activate-programming/${routeId}`)
      .pipe(catchError(error => observableThrowError(error.error)));
  }
}
