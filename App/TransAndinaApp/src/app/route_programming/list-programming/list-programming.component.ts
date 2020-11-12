import {Component, OnInit, ViewChild} from '@angular/core';
import {RouteService} from "../../Service/route/route-service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EditProgrammingDialogComponent} from "../edit-programming-dialog/edit-programming-dialog.component";
import {Route} from "@angular/router";
import {Ruta} from "../../models/Ruta";
import {ProgrammingService} from "../../Service/programming/programming-service";

@Component({
  selector: 'app-list-programming',
  templateUrl: './list-programming.component.html',
  styleUrls: ['../.././home/home.component.css','./list-programming.component.css']
})
export class ListProgrammingComponent implements OnInit {

  programmingSelectedId: any;
  showLoader: boolean = false;
  form: FormGroup;
  programmings: any[];

  @ViewChild('editProgrammingDialog', {static: true})
  editProgrammingDialog: EditProgrammingDialogComponent;

  constructor(
    private programmingService: ProgrammingService,
  ) {
  }

  programmingstest = [
    {
      id: 1, nombre: 'Bogotá - cartagena', fecha: '2020-10-12  08:43', id_conductor: 2, id_vehiculo: 1, estado: 'En curso',
      conductor: {
        nombre: 'Juan'
      },
      vehiculo: {
        marca: 'Mazda'
      },

    },
    {
      id: 2, nombre: 'Medellin - Salento', fecha: '2020-10-12  08:43', id_conductor: 2, id_vehiculo: 1,  estado: 'Finalizada',
      conductor: {
        nombre: 'Carlos'
      },
      vehiculo: {
        marca: 'Nissan'
      },}
  ];


  ngOnInit() {
    this.programmingService.getProgrammings()
      .subscribe(response => {
        this.programmings = response;
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
    this.programmingService.createProgramming(e).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
    });
  }

}
