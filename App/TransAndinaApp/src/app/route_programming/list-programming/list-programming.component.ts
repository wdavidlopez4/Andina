import { Component, OnInit, ViewChild } from '@angular/core';
import { RouteService } from "../../Service/route/route-service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EditProgrammingDialogComponent } from "../edit-programming-dialog/edit-programming-dialog.component";
import { Route } from "@angular/router";
import { Ruta } from "../../models/Ruta";
import { ProgrammingService } from "../../Service/programming/programming-service";
import { Programacion } from 'src/app/models/Programacion';

@Component({
  selector: 'app-list-programming',
  templateUrl: './list-programming.component.html',
  styleUrls: ['../.././home/home.component.css', './list-programming.component.css']
})
export class ListProgrammingComponent implements OnInit {

  programmingSelectedId: any;
  showLoader: boolean = false;
  form: FormGroup;
  @ViewChild('editProgrammingDialog', { static: true })
  editProgrammingDialog: EditProgrammingDialogComponent;

  constructor(
    private programmingService: ProgrammingService,
  ) {
  }

  programmings: Programacion[];

  ngOnInit() {
    this.programmings = JSON.parse(localStorage.getItem("programmingRoutes")) as unknown as Programacion[];
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
