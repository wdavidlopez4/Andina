import { Component, OnInit, ViewChild } from '@angular/core';
import { RouteService } from "../../Service/route/route-service";
import { CreateRouteDialogComponent } from "../create-route-dialog/create-route-dialog.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EditRouteDialogComponent } from "../edit-route-dialog/edit-route-dialog.component";
import { AddProgrammingDialogComponent } from "../add-programming-dialog/add-programming-dialog.component";
import { CreateStopDialogComponent } from "../create-stop-dialog/create-stop-dialog.component";
import { EditStopDialogComponent } from "../edit-stop-dialog/edit-stop-dialog.component";
import { Route } from "@angular/router";
import { Ruta } from "../../models/Ruta";
import { Persona } from "../../models/Persona";
import { Vehiculo } from "../../models/Vehiculo";
import { Programacion } from 'src/app/models/Programacion';

@Component({
  selector: 'app-list-route',
  templateUrl: './list-route.component.html',
  styleUrls: ['../.././home/home.component.css', './list-route.component.css']
})
export class ListRouteComponent implements OnInit {

  routeSelectedId: any;
  showLoader: boolean = false;
  form: FormGroup;
  routes: Ruta[];
  persons: Persona[];
  vehicles: Vehiculo[];

  @ViewChild('createRouteDialog', { static: true })
  createRouteDialog: CreateRouteDialogComponent;

  @ViewChild('editRouteDialog', { static: true })
  editRouteDialog: EditRouteDialogComponent;

  @ViewChild('addProgrammingDialog', { static: true })
  addProgrammingDialog: AddProgrammingDialogComponent;

  @ViewChild('createStopDialog', { static: true })
  createStopDialog: CreateStopDialogComponent;

  @ViewChild('editStopDialog', { static: true })
  editStopDialog: EditStopDialogComponent;

  constructor(
    private routeService: RouteService,
  ) {
  }

  routestest: Programacion[];
  vehiculos: Vehiculo[];
  personas: Persona[];

  ngOnInit() {
    this.routestest = JSON.parse(localStorage.getItem("programmingRoutes")) as unknown as Programacion[];
    this.vehiculos = JSON.parse(localStorage.getItem("vehicles")) as unknown as Vehiculo[];
    this.personas = JSON.parse(localStorage.getItem("persons")) as unknown as Persona[];
debugger
    this.routeService.getRoutes()
      .subscribe(response => {
        this.routes = response;
      });
    this.routeService.getPersons()
      .subscribe(response => {
        this.persons = response;
      });
    this.routeService.getVehicles()
      .subscribe(response => {
        this.vehicles = response;
      });
  }

  routeSelected(data) {
    this.routeSelectedId = data;
    console.log(data);
  }

  onShowEditRoute(route) {
    this.editRouteDialog.loadFormRoute(route);
  }

  onShowAddProgramming(id_persona, id_vehiculo) {
    this.addProgrammingDialog.loadFormRoute(id_persona, id_vehiculo);
  }

  onShowEditStop(route) {
    this.editStopDialog.rutaId = this.routeSelectedId;
    this.editStopDialog.loadFormStop(route);
  }

  onCreateRoute(e) {
    // console.log(e);
    this.showLoader = true;
    // this.routeService.createRoute(e).subscribe((data) => {
    //   this.showLoader = false;
    // }, error => {
    // console.log(error);
    this.addRuta();
    this.createRouteDialog.form.reset();
    this.showLoader = false;
    // });
  }

  onEditRoute(e) {
    console.log(e);
    this.showLoader = true;
    this.routeService.editRoute(e).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
    });
  }


  onAddProgramming(data) {
    console.log(data);
    const rutaId = this.routeSelectedId.id;
    this.showLoader = true;
    this.routeService.createProgramingRoute({ data, rutaId }).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
      this.createRouteDialog.form.reset();
    });
  }


  onDeleteRoute(roueId: number) {
    console.log(roueId);
    this.showLoader = true;
    this.routeService.deleteRoute(roueId).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
    });
  }

  onActivateRoute(roueId: number) {
    console.log(roueId);
    this.showLoader = true;
    this.routeService.activateRoute(roueId).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
    });
  }

  onCreateStop(e, routeId) {
    console.log(e);
    e.ruta_id = routeId.id;
    this.showLoader = true;
    this.routeService.createStop(e).subscribe((response) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
      this.addStop(e);
      this.createStopDialog.form.reset();
    });
  }

  onEditStop(e) {
    console.log(e);
    this.showLoader = true;
    this.routeService.editStop(e).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
    });
  }

  onDeleteStop(roueId: number) {
    console.log(roueId);
    this.showLoader = true;
    this.routeService.deleteStop(roueId).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
    });
  }

  addRuta() {
    const aux = this.createRouteDialog.form.getRawValue();
    this.routestest.push({
      id: 1,
      nombre: aux.nombre,
      fecha: aux.fecha,
      hora: aux.hora,
      precio: aux.precio,
      value: 1,
      estado: true,
      id_persona: 1,
      id_vehiculo: 1,
      paradas: []
    });

    localStorage.setItem("programmingRoutes", JSON.stringify(this.routestest));
  }

  deleteruta(id) {
    this.showLoader = true;
    const aux = this.createRouteDialog.form.getRawValue();
    const ruta = this.routestest.find(r => r.id === id);
    ruta.estado = false;
    this.showLoader = false;
  }

  activarRuta(id) {
    this.showLoader = true;
    const aux = this.createRouteDialog.form.getRawValue();
    const ruta = this.routestest.find(r => r.id === id);
    ruta.estado = true;
    this.showLoader = false;
  }

  addStop(data: any) {
    const aux = this.createStopDialog.form.getRawValue();
    this.routestest[this.routeSelectedId.id - 1].paradas.push({
      id: 1, nombre: aux.nombre
    });

    localStorage.setItem("programmingRoutes", JSON.stringify(this.routestest));
  }

}
