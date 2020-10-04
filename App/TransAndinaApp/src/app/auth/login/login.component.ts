import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {LoginService} from "../../Service/login/login-service";
import {Router} from "@angular/router";
import {error} from "util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
      Password: ['', Validators.required]
    });
  }

  Submit() {
    this.loginService.Login(this.form.value).subscribe((data) => {
      localStorage.setItem("token", data.token);
      this.router.navigateByUrl('/home');
    }, error => {
      (error.status == 400) ? alert("Datos incorrectos") : console.log(error);
    });
  }

}
