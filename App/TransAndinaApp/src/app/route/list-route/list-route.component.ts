import {Component, OnInit, ViewChild} from '@angular/core';
import {RouteService} from "../../Service/route/route-service";
import {CreateRouteDialogComponent} from "../create-route-dialog/create-route-dialog.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EditRouteDialogComponent} from "../edit-route-dialog/edit-route-dialog.component";
import {CreateStopDialogComponent} from "../create-stop-dialog/create-stop-dialog.component";
import {EditStopDialogComponent} from "../edit-stop-dialog/edit-stop-dialog.component";
import {Route} from "@angular/router";
import {Ruta} from "../../models/Ruta";

@Component({
  selector: 'app-list-route',
  templateUrl: './list-route.component.html',
  styleUrls: ['./list-route.component.css']
})
export class ListRouteComponent implements OnInit {

  routeSelectedId: any;
  showLoader: boolean = false;
  form: FormGroup;
  routesa: Ruta[];

  @ViewChild('createRouteDialog', {static: true})
  createRouteDialog: CreateRouteDialogComponent;

  @ViewChild('editRouteDialog', {static: true})
  editRouteDialog: EditRouteDialogComponent;

  @ViewChild('createStopDialog', {static: true})
  createStopDialog: CreateStopDialogComponent;

  @ViewChild('editStopDialog', {static: true})
  editStopDialog: EditStopDialogComponent;

  constructor(
    private routeService: RouteService,
    private fb: FormBuilder
  ) {
  }


  routes = [
    {
      id: 1, nombre: 'Bogotá - cartagena', fecha: '2020-10-12', hora: '08:43', precio: 20500, value: 1,
      paradas: [
        {id: 1, nombre: 'La Vega'},
        {id: 2, nombre: 'Honda'},
        {id: 3, nombre: 'La Dorada'},
        {id: 4, nombre: 'Villa de Leiva'},
        {id: 5, nombre: 'Agua Chica'},
        {id: 6, nombre: 'Bosconia'},
        {id: 7, nombre: 'Turbaco'},
      ]
    },
    {
      id: 2, nombre: 'Medellin - Salento', fecha: '2020-10-12', hora: '08:43', precio: 20500, value: 2,
      paradas: [
        {id: 1, nombre: 'μg/5245'},
        {id: 1, nombre: 'μg/5245'},
        {id: 1, nombre: 'μg/5245'},
      ]
    },
    {
      id: 3, nombre: 'Neiva - Bogotá', fecha: '2020-10-12', hora: '08:43', precio: 20500, value: 3,
      paradas: [
        {id: 1, nombre: 'μg/5245'},
        {id: 1, nombre: 'μg/5245'},
      ]
    },
    {id: 4, nombre: 'La mesa - Girardot', fecha: '2020-10-12', hora: '08:43', precio: 20500, value: 4},
    {
      id: 5, nombre: 'Cartagena - Santamarta', fecha: '2020-10-12', hora: '08:43', precio: 20500, value: 5,
      paradas: [
        {id: 1, nombre: 'μg/5245'},
        {id: 1, nombre: 'μg/5245'},
        {id: 1, nombre: 'μg/5245'},
        {id: 1, nombre: 'μg/5245'},
      ]
    },
  ];

  paradas = [
    {id: 1, nombre: 'μg/5245', fecha: '2020-10-12', hora: '08:43', precio: 20500, value: 1},
    {id: 2, nombre: 'μg/245', fecha: '2020-10-12', hora: '08:43', precio: 20500, value: 2},
    {id: 3, nombre: 'μg/.', fecha: '2020-10-12', hora: '08:43', precio: 20500, value: 3},
    {id: 4, nombre: 'μg/31..', fecha: '2020-10-12', hora: '08:43', precio: 20500, value: 4},
    {id: 5, nombre: 'μg/Tableta', fecha: '2020-10-12', hora: '08:43', precio: 20500, value: 5},
  ];

  ngOnInit() {
    this.routeService.getRoutes()
      .subscribe(response => {
        this.routesa = response;
      });
  }

  routeSelected(data) {
    this.routeSelectedId = data;
    console.log(data);
  }

  onShowEditRoute(route) {
    this.editRouteDialog.loadFormRoute(route);
  }

  onShowEditStop(route) {
    this.editStopDialog.rutaId = this.routeSelectedId;
    this.editStopDialog.loadFormStop(route);
  }

  onCreateRoute(e) {
    console.log(e);
    this.showLoader = true;
    this.routeService.createRoute(e).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
      this.addRuta();
    });
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
    this.routes.push({
      id: 1, nombre: aux.nombre, fecha: aux.fecha, hora: aux.hora, precio: aux.precio, value: 1,
      paradas: []
    });
  }

  addStop(data: any) {
    console.log(data, 'entra')
    const aux = this.createStopDialog.form.getRawValue();
    console.log(aux, 'form')
    console.log(this.routes[this.routeSelectedId.id - 1], 'rutas')
     this.routes[this.routeSelectedId.id - 1].
      paradas.push({
      id: 1, nombre: aux.nombre
    });
  }

}
