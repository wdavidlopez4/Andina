import { Component, OnInit, ViewChild } from '@angular/core';
import { VehicleService } from "../../Service/vehicle/vehicle-service";
import { CreateVehicleDialogComponent } from "../create-vehicle-dialog/create-vehicle-dialog.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EditVehicleDialogComponent } from "../edit-vehicle-dialog/edit-vehicle-dialog.component";
import { Route } from "@angular/router";
import { Vehiculo } from "../../models/Vehiculo";

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['../.././home/home.component.css', './list-vehicle.component.css'
  ]
})
export class ListVehicleComponent implements OnInit {

  vehicleSelectedId: any;
  showLoader: boolean = false;
  form: FormGroup;
  vehicles: Vehiculo[];

  @ViewChild('createVehicleDialog', { static: true })
  createVehicleDialog: CreateVehicleDialogComponent;

  @ViewChild('editVehicleDialog', { static: true })
  editVehicleDialog: EditVehicleDialogComponent;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicles = JSON.parse(localStorage.getItem("vehicles")) as unknown as Vehiculo[];
  }

  vehicleSelected(data) {
    this.vehicleSelectedId = data;
    console.log(data);
  }

  onShowEditVehicle(vehicle) {
    this.editVehicleDialog.loadFormRoute(vehicle);
  }


  onCreateVehicle(e) {
    // console.log(e);
    this.showLoader = true;
    // this.vehicleService.createVehicle(e).subscribe((data) => {
    //   this.showLoader = false;
    // }, error => {
    // console.log(error);
    this.addVehiculo();
    this.createVehicleDialog.form.reset();
    this.showLoader = false;

    // });
  }

  onEditVehicle(e) {
    console.log(e);
    this.showLoader = true;
    this.vehicleService.editVehicle(e).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
    });
  }

  onDeleteVehicle(roueId: number) {
    console.log(roueId);
    this.showLoader = true;
    this.vehicleService.deleteVehicle(roueId).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
    });
  }

  onActivateVehicle(roueId: number) {
    console.log(roueId);
    this.showLoader = true;
    this.vehicleService.activateVehicle(roueId).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
    });
  }

  deleteVehiculo(id) {
    this.showLoader = true;
    const ruta = this.vehicles.find(r => r.id === id);
    ruta.estado = 0;
    this.showLoader = false;
  }


  onEditVehiculo(data) {
    console.log(data)
    this.showLoader = true;
    const vehiculo = this.vehicles.find(r => r.id === data.id);
    
    vehiculo.estado = 0;
    this.showLoader = false;
  }

  activarVehiculo(id) {
    this.showLoader = true;
    const ruta = this.vehicles.find(r => r.id === id);
    ruta.estado = 1;
    this.showLoader = false;
  }

  addVehiculo() {
    const aux = this.createVehicleDialog.form.getRawValue();
    this.vehicles.push({
      id: 1, tipo: aux.tipo, marca: aux.marca, modelo: aux.modelo, placa: aux.placa, capacidad: aux.capacidad, value: 1, estado: 1,
    });

    localStorage.setItem("vehicles", JSON.stringify(this.vehicles));

  }

}
