import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Conductor} from "../../models/Conductor";
import {catchError} from "rxjs/operators";
import {Observable, pipe, throwError as observableThrowError} from 'rxjs';
import {Route} from "@angular/router";


@Injectable()
export class DriverService {

  private url: string;
  constructor(
    private http: HttpClient) {
    this.url = environment.endpoint;
  }

  getDriver(): Observable<Conductor[]> {
    return this.http
      .get<Conductor[]>(`${this.url}/driver/get-drivers`)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  createDriver(data: Conductor): Observable<Conductor> {
    return this.http
      .post<Conductor>(`${this.url}/driver/create-drivers`, data)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  editDriver(data: Conductor): Observable<Conductor> {
    return this.http
      .post<Conductor>(`${this.url}/driver/edit-drivers`, data)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  deleteDriver(driverId: number): Observable<Conductor> {
    return this.http
      .delete<Conductor>(`${this.url}/driver/delete-drivers/${driverId}`)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  activateDriver(driverId: number): Observable<Conductor> {
    return this.http
      .delete<Conductor>(`${this.url}/driver/activate-drivers/${driverId}`)
      .pipe(catchError(error => observableThrowError(error.error)));
  }
}
