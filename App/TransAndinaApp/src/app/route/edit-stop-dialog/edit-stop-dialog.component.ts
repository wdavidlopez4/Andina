import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ruta} from "../../models/Ruta";
import {RouteService} from "../../Service/route/route-service";
import {Paradas} from "../../models/Paradas";

@Component({
  selector: 'app-edit-stop-dialog',
  templateUrl: './edit-stop-dialog.component.html',
  styleUrls: ['./edit-stop-dialog.component.css']
})
export class EditStopDialogComponent implements OnInit {

  form: FormGroup;
  showLoader: boolean = false;
  rutaId: number;

  @Output()
  editeStop = new EventEmitter<Ruta>();

  constructor(
    private routeService: RouteService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.CreateForm();
  }

  CreateForm() {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  loadFormStop(parada: Paradas) {
    this.form = this.fb.group({
      id: [parada.id, Validators.required],
      ruta_id: [this.rutaId, Validators.required],
      nombre: [parada.nombre, Validators.required],
    });
  }

  onEditStop() {
    const ruta = this.form.getRawValue();
    this.editeStop.emit(ruta);
  }
}
