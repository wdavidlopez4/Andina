import {Component, OnInit, ViewChild} from '@angular/core';
import {ProgrammingService} from "../../Service/programming/programming-service";
import {CreateProgrammingDialogComponent} from "../create-programming-dialog/create-programming-dialog.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EditProgrammingDialogComponent} from "../edit-programming-dialog/edit-programming-dialog.component";
import {Route} from "@angular/router";
import {Programacion} from "../../models/Programacion";

@Component({
  selector: 'app-list-programming',
  templateUrl: './list-programming.component.html',
  styleUrls: ['./list-programming.component.css']
})
export class ListProgrammingComponent implements OnInit {

  programmingSelectedId: any;
  showLoader: boolean = false;
  form: FormGroup;
  routesa: Programacion[];

  @ViewChild('createProgrammingDialog', {static: true})
  createProgrammingDialog: CreateProgrammingDialogComponent;

  @ViewChild('editProgrammingDialog', {static: true})
  editProgrammingDialog: EditProgrammingDialogComponent;

  constructor(
    private programmingService: ProgrammingService,
  ) {
  }

  programmings = [
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
    this.programmingService.getProgrammings()
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


  onCreateProgramming(e) {
    console.log(e);
    this.showLoader = true;
    this.programmingService.createProgramming(e).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
      this.addProgramacion();
      this.createProgrammingDialog.form.reset();
    });
  }

  onEditProgramming(e) {
    console.log(e);
    this.showLoader = true;
    this.programmingService.editProgramming(e).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
    });
  }

  onDeleteProgramming(roueId: number) {
    console.log(roueId);
    this.showLoader = true;
    this.programmingService.deleteProgramming(roueId).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
    });
  }

  onActivateProgramming(roueId: number) {
    console.log(roueId);
    this.showLoader = true;
    this.programmingService.activateProgramming(roueId).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
    });
  }

  
  addProgramacion() {
    const aux = this.createProgrammingDialog.form.getRawValue();
    this.programmings.push({
      id: 1, tipo: aux.tipo, marca: aux.marca, modelo: aux.modelo, placa: aux.placa,capacidad: aux.capacidad, value: 1, estado: 1,
    });
  }

}
