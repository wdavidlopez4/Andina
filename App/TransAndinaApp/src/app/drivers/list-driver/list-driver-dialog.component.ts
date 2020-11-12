import {Component, OnInit, ViewChild} from '@angular/core';
import {CreateDriverDialogComponent} from "../create-driver-dialog/create-driver-dialog.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Route} from "@angular/router";
import {Conductor} from "../../models/Conductor";
import {EditDriverDialogComponent } from '../edit-driver-dialog/edit-driver-dialog.component';
import {DriverService} from "../../Service/driver/driver-service";

@Component({
  selector: 'app-list-driver',
  templateUrl: './list-driver-dialog.component.html',
  styleUrls: ['../.././home/home.component.css','./list-driver-dialog.component.css']
})
export class ListDriverComponent implements OnInit {

  driverSelectedId: any;
  showLoader: boolean = false;
  form: FormGroup;
  driversa: Conductor[];

  @ViewChild('createDriverDialog', {static: true})
  createDriverDialog: CreateDriverDialogComponent;

  @ViewChild('editDriverDialog', {static: true})
  editDriverDialog: EditDriverDialogComponent;

  
  constructor(
    private driverService: DriverService,
  ) {
  }

  drivers = [
    {
      id: 1, tipo_documento: '',numero_documento: '',nombres: '',apellidos:'',numero_celular:'', estado: 1 
    },
    
  ];


  ngOnInit() {
    this.driverService.getDriver()
      .subscribe(response => {
        this.driversa = response;
      });
  }

  driverSelected(data) {
    this.driverSelectedId = data;
    console.log(data);
  }

  onShowEditDriver(driver) {
    this.editDriverDialog.loadFormRoute(driver);
  }

  
  onCreateDriver(e) {
    console.log(e);
    this.showLoader = true;
    this.driverService.createDriver(e).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
      this.addDriver();
      this.createDriverDialog.form.reset();
    });
  }

  onEditDriver(e) {
    console.log(e);
    this.showLoader = true;
    this.driverService.editDriver(e).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
    });
  }

  
  onDeleteDriver(driverId: number) {
    console.log(driverId);
    this.showLoader = true;
    this.driverService.deleteDriver(driverId).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
    });
  }

  onActivateDriver(driverId: number) {
    console.log(driverId);
    this.showLoader = true;
    this.driverService.activateDriver(driverId).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
    });
  }

 
    addDriver() {
    const aux = this.createDriverDialog.form.getRawValue();
    this.drivers.push({
      id: 1, tipo_documento: aux.tipo_documento, numero_documento: aux.numero_documento, nombres: aux.nombres, apellidos: aux.apellidos, numero_celular: aux.numero_celular, estado: 1,
    });
  }

  
}
