import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PersonService} from "../../Service/persons/person-service";
import {Persona} from "../../models/Persona";


@Component({
  selector: 'app-create-person-dialog',
  templateUrl: './create-persons-dialog.component.html',
  styleUrls: ['./create-persons-dialog.component.css']
})
export class CreatePersonDialogComponent implements OnInit {

  display:string;
  form:FormGroup;
  showLoader: boolean = false;

  @Output()
  createPerson = new EventEmitter<Persona>();

  constructor(
    private personService: PersonService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    console.log(this.display)
    this.CreateForm();
  }

  CreateForm() {
    this.form = this.fb.group({
      nit: [1, Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      tipo_persona: ['', Validators.required],
    });
  }

  onCreatePerson(){
    const person = this.form.getRawValue();
    this.createPerson.emit(person);
  }

}
