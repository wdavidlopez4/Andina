import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DriverService} from "../../Service/driver/driver-service";
import {Conductor} from "../../models/Conductor";


@Component({
  selector: 'app-create-driver-dialog',
  templateUrl: './create-driver-dialog.component.html',
  styleUrls: ['./create-driver-dialog.component.css']
})
export class CreateDriverDialogComponent implements OnInit {

  display:string;
  form:FormGroup;
  showLoader: boolean = false;

  estados = [
    {label: 'Disponible', value: 1},
    {label: 'En mantenimiento', value: 2},
    {label: 'No disponible', value: 3},

  ]

  @Output()
  createDriver = new EventEmitter<Conductor>();

  constructor(
    private driverService: DriverService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    console.log(this.display)
    this.CreateForm();
  }

  CreateForm() {
    this.form = this.fb.group({
      tipo_documento: [1, Validators.required],
      numero_documento: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      numero_celular: ['', Validators.required],
    });
  }

  onCreateDriver(){
    const driver = this.form.getRawValue();
    this.createDriver.emit(driver);
  }

}
