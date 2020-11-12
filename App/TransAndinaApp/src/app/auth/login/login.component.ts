import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { LoginService } from "../../Service/login/login-service";
import { Router } from "@angular/router";
import { error } from "util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showLoader: boolean = false;
  form: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.CreateForm();
  }

  CreateForm() {
    this.form = this.fb.group({
      Email: ['', Validators.required],
      Contraseña: ['', Validators.required]
    });
  }

  Submit() {
    this.showLoader = true;
    this.loginService.Login(this.form.value).subscribe((data) => {
      debugger;
      localStorage.setItem("token", data.token);
      debugger;
      this.showLoader = false;
      this.router.navigateByUrl('/home');
    }, error => {
      alert("Datos incorrectos") 
      // (error.status == 400) ? alert("Datos incorrectos") : console.log(error);
      //Bad request del api no devuelve el mensaje en HttpErrorResponse
      console.log(error);
      this.showLoader = false;
      this.router.navigateByUrl('/home');
    });
  }

}
