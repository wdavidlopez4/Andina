import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Persona } from 'src/app/models/Persona';
import {PersonService} from "../../Service/persons/person-service";

@Component({
  selector: 'app-edit-persons-dialog',
  templateUrl: './edit-persons-dialog.component.html',
  styleUrls: ['./edit-persons-dialog.component.css']
})
export class EditPersonDialogComponent implements OnInit {

  display: string;
  form: FormGroup;
  showLoader: boolean = false;

  @Output()
  editPerson = new EventEmitter<Persona>();

  constructor(
    private personService: PersonService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.CreateForm();
  }

  CreateForm() {
    this.form = this.fb.group({
      nit: ['', Validators.required],
      nombre: ['' , Validators.required],
      apellido: ['',Validators.required],
      telefono: ['',Validators.required],
      direccion: ['',Validators.required],
      tipo_persona: [1,Validators.required],
      estado: [1,Validators.required],
    });
  }

  loadFormPerson(person: Persona) {
    this.form = this.fb.group({
      
      id: [person.id, Validators.required],
      nit: [person.nit, Validators.required],
      nombre: [person.nombre,Validators.required],
      apellido: [person.apellido,Validators.required],
      telefono: [person.telefono, Validators.required],
      direccion: [person.direccion, Validators.required],
      tipo_persona: [person.tipo_persona, Validators.required],
      estado: [person.estado, Validators.required],
      

    });
  }

  onEditPerson() {
    const Persona = this.form.getRawValue();
    this.editPerson.emit(Persona);
  }
}
