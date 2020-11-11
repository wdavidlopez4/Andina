import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Vehiculo} from "../../models/Vehiculo";
import {VehicleService} from "../../Service/vehicle/vehicle-service";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-edit-vehicle-dialog',
  templateUrl: './edit-vehicle-dialog.component.html',
  styleUrls: ['./edit-vehicle-dialog.component.css']
})
export class EditVehicleDialogComponent implements OnInit {

  display: string;
  form: FormGroup;
  showLoader: boolean = false;

  @Output()
  editeRoute = new EventEmitter<Vehiculo>();

  constructor(
    private vehicleService: VehicleService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.CreateForm();
  }

  CreateForm() {
    this.form = this.fb.group({
      tipo: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      placa: ['', Validators.required],
      capacidad: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  loadFormRoute(vehiculo: Vehiculo) {
    this.form = this.fb.group({
      id: [vehiculo.id, Validators.required],
      tipo: [vehiculo.tipo, Validators.required],
      marca: [vehiculo.marca, Validators.required],
      modelo: [vehiculo.modelo, Validators.required],
      placa: [vehiculo.placa, Validators.required],
      capacidad: [vehiculo.capacidad, Validators.required],
      estado: [vehiculo.estado, Validators.required],
    });
  }

  onEditVehicle() {
    const vehicle = this.form.getRawValue();
    this.editeRoute.emit(vehicle);
  }
}
