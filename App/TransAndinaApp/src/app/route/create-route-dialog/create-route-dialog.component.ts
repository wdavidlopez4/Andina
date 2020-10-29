import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RouteService} from "../../Service/route/route-service";
import {Ruta} from "../../models/Ruta";

@Component({
  selector: 'app-create-route-dialog',
  templateUrl: './create-route-dialog.component.html',
  styleUrls: ['./create-route-dialog.component.css']
})
export class CreateRouteDialogComponent implements OnInit {

  display:string;
  form:FormGroup;
  showLoader: boolean = false;

  estados = [
    {label: 'Activo', value: 1},
    {label: 'Inactivo', value: 2},
  ]

  @Output()
  createRoute = new EventEmitter<Ruta>();

  constructor(
    private routeService: RouteService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    console.log(this.display)
    this.CreateForm();
  }

  CreateForm() {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      precio: ['', Validators.required],
      estado: [1, Validators.required],
    });
  }

  onCreateRoute(){
    const ruta = this.form.getRawValue();
    this.createRoute.emit(ruta);
  }

}
