import {Component, OnInit, ViewChild} from '@angular/core';
import {RouteService} from "../../Service/route/route-service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EditProgrammingDialogComponent} from "../edit-programming-dialog/edit-programming-dialog.component";
import {Route} from "@angular/router";
import {Ruta} from "../../models/Ruta";

@Component({
  selector: 'app-list-programming',
  templateUrl: './list-programming.component.html',
  styleUrls: ['../.././home/home.component.css','./list-programming.component.css']
})
export class ListProgrammingComponent implements OnInit {

  programmingSelectedId: any;
  showLoader: boolean = false;
  form: FormGroup;
  routesa: Ruta[];

  @ViewChild('editProgrammingDialog', {static: true})
  editProgrammingDialog: EditProgrammingDialogComponent;

  constructor(
    private routeService: RouteService,
  ) {
  }

  programmings = [
    {
      id: 1, nombre: 'Bogotá - cartagena', fecha: '2020-10-12 / 08:43', id_conductor: 2, id_vehiculo: 1
    },
    {
      id: 2, nombre: 'Medellin - Salento', fecha: '2020-10-12 / 08:43', id_conductor: 2, id_vehiculo: 1}
  ];


  ngOnInit() {
    this.routeService.getRoutes()
      .subscribe(response => {
        this.routesa = response;
      });
  }

  programmingSelected(data) {
    this.programmingSelectedId = data;
    console.log(data);
  }

  onShowEditProgramming(programming) {
    this.editProgrammingDialog.loadFormRoute(programming);
  }

  onEditProgramming(e) {
    console.log(e);
    this.showLoader = true;
    this.routeService.addProgramming(e).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
    });
  }

}
