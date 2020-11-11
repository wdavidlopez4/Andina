import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProgrammingService} from "../../Service/programming/programming-service";
import {Programacion} from "../../models/Programacion";

@Component({
  selector: 'app-create-programming-dialog',
  templateUrl: './create-programming-dialog.component.html',
  styleUrls: ['./create-programming-dialog.component.css']
})
export class CreateProgrammingDialogComponent implements OnInit {

  display:string;
  form:FormGroup;
  showLoader: boolean = false;

  estados = [
    {label: 'Disponible', value: 1},
    {label: 'No disponible', value: 2},

  ]

  @Output()
  createRoute = new EventEmitter<Programacion>();

  constructor(
    private programmingService: ProgrammingService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.CreateForm();
  }

  CreateForm() {
    this.form = this.fb.group({
      conductor: ['', Validators.required],
      vehiculo: ['', Validators.required],
      estado: [1, Validators.required]
    });
  }

  onCreateRoute(){
    const ruta = this.form.getRawValue();
    this.createRoute.emit(ruta);
  }

}
