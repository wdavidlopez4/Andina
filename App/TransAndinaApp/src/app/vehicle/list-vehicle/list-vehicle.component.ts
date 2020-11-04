import {Component, OnInit, ViewChild} from '@angular/core';
import {VehicleService} from "../../Service/vehicle/vehicle-service";
import {CreateVehicleDialogComponent} from "../create-vehicle-dialog/create-vehicle-dialog.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EditVehicleDialogComponent} from "../edit-vehicle-dialog/edit-vehicle-dialog.component";
import {Route} from "@angular/router";
import {Vehiculo} from "../../models/Vehiculo";

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.css']
})
export class ListVehicleComponent implements OnInit {

  vehicleSelectedId: any;
  showLoader: boolean = false;
  form: FormGroup;
  routesa: Vehiculo[];

  @ViewChild('createVehicleDialog', {static: true})
  createVehicleDialog: CreateVehicleDialogComponent;

  @ViewChild('editVehicleDialog', {static: true})
  editVehicleDialog: EditVehicleDialogComponent;

  constructor(
    private vehicleService: VehicleService,
  ) {
  }

  vehicles = [
    {
      id: 1, tipo: 'Bus', marca: 'Audi', modelo: '2020', placa: 'fds232', capacidad: 55,value: 1, estado: 1
    },
    {
      id: 2, tipo: 'Bus', marca: 'Hyundai', modelo: '2010', placa: 'fwf231',  capacidad: 55,value: 2, estado: 0
    },
    {
      id: 3, tipo: 'Bus', marca: 'Maserati', modelo: '2012', placa: 'fvs232',  capacidad: 65,value: 3, estado: 1
    },
    {
      id: 4, tipo: 'Bus', marca: 'Jeep', modelo: '2012', placa: 'f4s232', capacidad: 55, value: 4, estado: 1
    }
  ];


  ngOnInit() {
    this.vehicleService.getVehicles()
      .subscribe(response => {
        this.routesa = response;
      });
  }

  vehicleSelected(data) {
    this.vehicleSelectedId = data;
    console.log(data);
  }

  onShowEditVehicle(vehicle) {
    this.editVehicleDialog.loadFormRoute(vehicle);
  }


  onCreateVehicle(e) {
    console.log(e);
    this.showLoader = true;
    this.vehicleService.createVehicle(e).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
      this.addVehiculo();
      this.createVehicleDialog.form.reset();
    });
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

  
  addVehiculo() {
    const aux = this.createVehicleDialog.form.getRawValue();
    this.vehicles.push({
      id: 1, tipo: aux.tipo, marca: aux.marca, modelo: aux.modelo, placa: aux.placa,capacidad: aux.capacidad, value: 1, estado: 1,
    });
  }

}
