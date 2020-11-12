import { Injectable } from '@angular/core';
import {Usuario} from "../../models/Usuario";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class LoginService {

  private url: string;
  constructor(
    private http: HttpClient) {
    this.url = environment.endpoint;
  }

  Login(data: Usuario): any {
    return this.http.post(this.url + 'Account/Logear', data);
  }

}
