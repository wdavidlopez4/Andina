import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Programacion} from "../../models/Programacion";
import {ProgrammingService} from "../../Service/programming/programming-service";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-edit-programming-dialog',
  templateUrl: './edit-programming-dialog.component.html',
  styleUrls: ['./edit-programming-dialog.component.css']
})
export class EditProgrammingDialogComponent implements OnInit {

  display: string;
  form: FormGroup;
  showLoader: boolean = false;

  @Output()
  editeRoute = new EventEmitter<Programacion>();

  constructor(
    private programmingService: ProgrammingService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.CreateForm();
  }

  CreateForm() {
    this.form = this.fb.group({
      id_conductor: ['', Validators.required],
      id_vehiculo: ['', Validators.required]
    });
  }

  loadFormRoute(programacion: Programacion) {
    this.form = this.fb.group({
      id: [programacion.id, Validators.required],
      conductor: [programacion.id_conductor, Validators.required],
      vehiculo: [programacion.id_vehiculo, Validators.required]
    });
  }

  onAddProgramming() {
    const ruta = this.form.getRawValue();
    this.editeRoute.emit(ruta);
  }
}
