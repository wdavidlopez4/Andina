import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ruta} from "../../models/Ruta";
import {RouteService} from "../../Service/route/route-service";
import {RouterModule} from "@angular/router";
import {Persona} from "../../models/Persona";
import {Vehiculo} from "../../models/Vehiculo";

@Component({
  selector: 'app-add-programming-dialog',
  templateUrl: './add-programming-dialog.component.html',
  styleUrls: ['./add-programming-dialog.component.css']
})
export class AddProgrammingDialogComponent implements OnInit {

  form: FormGroup;
  showLoader: boolean = false;

  @Output()
  createPogramingRoute = new EventEmitter<any>();

  @Input()
  personas: Persona;

  @Input()
  vehiculos: Vehiculo;

  @Input()
  persons: Persona;

  @Input()
  vehicles: Vehiculo;

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
      id_persona: ['', Validators.required],
      id_vehiculo: ['', Validators.required],
    });
  }

  loadFormRoute(id_persona, id_vehiculo) {
    this.form = this.fb.group({
      id_persona: [id_persona, Validators.required],
      id_vehiculo: [id_vehiculo, Validators.required]
    });
  }

  onAddProgramming() {
    const ruta = this.form.getRawValue();
    this.createPogramingRoute.emit(ruta);
  }
}
