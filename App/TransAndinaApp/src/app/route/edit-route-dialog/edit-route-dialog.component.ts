import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ruta} from "../../models/Ruta";
import {RouteService} from "../../Service/route/route-service";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-edit-route-dialog',
  templateUrl: './edit-route-dialog.component.html',
  styleUrls: ['./edit-route-dialog.component.css']
})
export class EditRouteDialogComponent implements OnInit {

  display: string;
  form: FormGroup;
  showLoader: boolean = false;

  @Output()
  editeRoute = new EventEmitter<Ruta>();

  constructor(
    private routeService: RouteService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.CreateForm();
  }

  CreateForm() {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  loadFormRoute(route: Ruta) {
    this.form = this.fb.group({
      id: [route.id, Validators.required],
      nombre: [route.nombre, Validators.required],
      fecha: [route.fecha, Validators.required],
      hora: [route.hora, Validators.required],
      precio: [route.precio, Validators.required],
    });
  }

  onEditRoute() {
    const ruta = this.form.getRawValue();
    this.editeRoute.emit(ruta);
  }
}
