import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Conductor} from "../../models/Conductor";
import {DriverService} from "../../Service/driver/driver-service";

@Component({
  selector: 'app-edit-driver-dialog',
  templateUrl: './edit-driver-dialog.component.html',
  styleUrls: ['./edit-driver-dialog.component.css']
})
export class EditDriverDialogComponent implements OnInit {

  display: string;
  form: FormGroup;
  showLoader: boolean = false;

  @Output()
  editDriver = new EventEmitter<Conductor>();

  constructor(
    private driverService: DriverService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.CreateForm();
  }

  CreateForm() {
    this.form = this.fb.group({
      tipo_documento: [1, Validators.required],
      numero_documento: ['' , Validators.required],
      nombres: ['',Validators.required],
      apellidos: ['',Validators.required],
      numero_celular: ['',Validators.required],
      estado: [1,Validators.required],
    });
  }

  loadFormRoute(driver: Conductor) {
    this.form = this.fb.group({
      id: [driver.id_conductor, Validators.required],
      tipo_documento: [driver.tipo_doc_conductor, Validators.required],
      numero_documento: [driver.doc_conductor, Validators.required],
      nombre: [driver.Nombre_conductor,Validators.required],
      apellidos: [driver.Apellido_conductor,Validators.required],
      numero_celular: [driver.celular_conductor, Validators.required],
      estado: [driver.estado, Validators.required],

    });
  }

  onEditDriver() {
    const Conductor = this.form.getRawValue();
    this.editDriver.emit(Conductor);
  }
}
