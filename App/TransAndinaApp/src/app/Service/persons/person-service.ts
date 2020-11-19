import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Persona} from "../../models/Persona";
import {catchError} from "rxjs/operators";
import {Observable, pipe, throwError as observableThrowError} from 'rxjs';
import {Route} from "@angular/router";
import {Vehiculo} from "../../models/Vehiculo";


@Injectable()
export class PersonService {

  private url: string;
  constructor(
    private http: HttpClient) {
    this.url = environment.endpoint;
  }

  getPerson(): Observable<Persona[]> {
    return this.http
      // .get<Persona[]>(`${this.url}/person/get-persons`)
      .get<Persona[]>("assets/data/personData.json")
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  createPerson(data: Persona): Observable<Persona> {
    return this.http
      .post<Persona>(`${this.url}/person/create-persons`, data)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  editPerson(data: Persona): Observable<Persona> {
    return this.http
      .post<Persona>(`${this.url}/person/edit-persons`, data)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  deletePerson(personId: number): Observable<Persona> {
    return this.http
      .delete<Persona>(`${this.url}/person/delete-persons/${personId}`)
      .pipe(catchError(error => observableThrowError(error.error)));
  }

  activatePerson(personId: number): Observable<Persona> {
    return this.http
      .delete<Persona>(`${this.url}/person/activate-persons/${personId}`)
      .pipe(catchError(error => observableThrowError(error.error)));
  }
}
