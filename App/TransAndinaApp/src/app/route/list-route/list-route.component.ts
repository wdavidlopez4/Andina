import {Component, OnInit, ViewChild} from '@angular/core';
import {RouteService} from "../../Service/route/route-service";
import {CreateRouteDialogComponent} from "../create-route-dialog/create-route-dialog.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EditRouteDialogComponent} from "../edit-route-dialog/edit-route-dialog.component";
import {AddProgrammingDialogComponent} from "../add-programming-dialog/add-programming-dialog.component";
import {CreateStopDialogComponent} from "../create-stop-dialog/create-stop-dialog.component";
import {EditStopDialogComponent} from "../edit-stop-dialog/edit-stop-dialog.component";
import {Route} from "@angular/router";
import {Ruta} from "../../models/Ruta";

@Component({
  selector: 'app-list-route',
  templateUrl: './list-route.component.html',
  styleUrls: ['../.././home/home.component.css','./list-route.component.css']
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

  @ViewChild('addProgrammingDialog', {static: true})
  addProgrammingDialog: AddProgrammingDialogComponent;

  @ViewChild('createStopDialog', {static: true})
  createStopDialog: CreateStopDialogComponent;
  
  @ViewChild('editStopDialog', {static: true})
  editStopDialog: EditStopDialogComponent;

  constructor(
    private routeService: RouteService,
  ) {
  }

  routes = [
    {
      id: 1, nombre: 'Bogotá - cartagena', fecha: '2020-10-12', hora: '08:43', precio: 20500, value: 1, estado: 1,
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
      id: 2, nombre: 'Medellin - Salento', fecha: '2020-10-12', hora: '08:43', precio: 20500, value: 2, estado: 0,
      paradas: [
        {id: 1, nombre: 'Terminal'},
      ]
    },
    {
      id: 3, nombre: 'Neiva - Bogotá', fecha: '2020-10-12', hora: '08:43', precio: 20500, value: 3, estado: 1,
      paradas: [
        {id: 1, nombre: 'Terminal'},
      ]
    },
    {id: 4, nombre: 'La mesa - Girardot', fecha: '2020-10-12', hora: '08:43', precio: 20500, value: 4, estado: 1,
      paradas: [
        {id: 1, nombre: 'Terminal'},
      ]
    }
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

  onShowAddProgramming(route) {
    this.addProgrammingDialog.loadFormRoute(route);
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
      this.createRouteDialog.form.reset();
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

  onAddProgramming(e) {
    this.showLoader = true;
    this.routeService.addProgramming(e).subscribe((data) => {
      this.showLoader = false;
    }, error => {
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
    this.routes.push({
      id: 1, nombre: aux.nombre, fecha: aux.fecha, hora: aux.hora, precio: aux.precio, value: 1, estado: 1,
      paradas: []
    });
  }

  addStop(data: any) {
    const aux = this.createStopDialog.form.getRawValue();
     this.routes[this.routeSelectedId.id - 1].
      paradas.push({
      id: 1, nombre: aux.nombre
    });
  }

}
