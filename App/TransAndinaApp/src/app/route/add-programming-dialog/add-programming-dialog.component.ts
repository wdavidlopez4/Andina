import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ruta} from "../../models/Ruta";
import {RouteService} from "../../Service/route/route-service";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-add-programming-dialog',
  templateUrl: './add-programming-dialog.component.html',
  styleUrls: ['./add-programming-dialog.component.css']
})
export class AddProgrammingDialogComponent implements OnInit {

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
    });
  }

  loadFormRoute(route: Ruta) {
    this.form = this.fb.group({
      id_conductor: [route.id, Validators.required],
      id_vehiculo: [route.nombre, Validators.required]
    });
  }

  onAddProgramming() {
    const ruta = this.form.getRawValue();
    this.editeRoute.emit(ruta);
  }
}
