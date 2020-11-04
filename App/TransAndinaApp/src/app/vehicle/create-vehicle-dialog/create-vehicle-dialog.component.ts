import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VehicleService} from "../../Service/vehicle/vehicle-service";
import {Vehiculo} from "../../models/Vehiculo";

@Component({
  selector: 'app-create-vehicle-dialog',
  templateUrl: './create-vehicle-dialog.component.html',
  styleUrls: ['./create-vehicle-dialog.component.css']
})
export class CreateVehicleDialogComponent implements OnInit {

  display:string;
  form:FormGroup;
  showLoader: boolean = false;

  estados = [
    {label: 'Disponible', value: 1},
    {label: 'En mantenimiento', value: 2},
    {label: 'No disponible', value: 3},

  ]

  @Output()
  createRoute = new EventEmitter<Vehiculo>();

  constructor(
    private vehicleService: VehicleService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    console.log(this.display)
    this.CreateForm();
  }

  CreateForm() {
    this.form = this.fb.group({
      tipo: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      placa: ['', Validators.required],
      capacidad: ['', Validators.required],
      estado: [1, Validators.required]
    });
  }

  onCreateRoute(){
    const ruta = this.form.getRawValue();
    this.createRoute.emit(ruta);
  }

}
