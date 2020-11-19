import {Component, OnInit, ViewChild} from '@angular/core';
import {CreatePersonDialogComponent} from "../create-persons-dialog/create-persons-dialog.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Route} from "@angular/router";
import {Persona} from "../../models/Persona";
import {EditPersonDialogComponent } from '../edit-persons-dialog/edit-persons-dialog.component';
import {PersonService} from "../../Service/persons/person-service";
import {Vehiculo} from "../../models/Vehiculo";

@Component({
  selector: 'app-list-person',
  templateUrl: './list-persons-dialog.component.html',
  styleUrls: ['../.././home/home.component.css','./list-persons-dialog.component.css']
})
export class ListPersonComponent implements OnInit {

  personSelectedId: any;
  showLoader: boolean = false;
  form: FormGroup;
  persons: Persona[];

  @ViewChild('createPersonDialog', {static: true})
  createPersonDialog: CreatePersonDialogComponent;

  @ViewChild('editPersonDialog', {static: true})
  editPersonDialog: EditPersonDialogComponent;


  constructor(
    private personService: PersonService,
  ) {
    this.persons = JSON.parse(localStorage.getItem("persons")) as unknown as Persona[];
  }


  ngOnInit() {
    this.personService.getPerson()
      .subscribe(response => {
        this.persons = response;
      });
  }


  personSelected(data) {
    this.personSelectedId = data;
    console.log(data);
  }

  onShowEditPerson(person) {
    this.editPersonDialog.loadFormPerson(person);
  }


  onCreatePerson(e) {
    console.log(e);
    this.showLoader = true;
    this.personService.createPerson(e).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
      this.addPerson();
      this.createPersonDialog.form.reset();
    });
  }

  onEditPerson(e) {
    console.log(e);
    this.showLoader = true;
    this.personService.editPerson(e).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
    });
  }


  onDeletePerson(personId: number) {
    console.log(personId);
    this.showLoader = true;
    this.personService.deletePerson(personId).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
    });
  }

  onActivatePerson(personId: number) {
    console.log(personId);
    this.showLoader = true;
    this.personService.activatePerson(personId).subscribe((data) => {
      this.showLoader = false;
    }, error => {
      console.log(error);
      this.showLoader = false;
    });
  }


    addPerson() {
    const aux = this.createPersonDialog.form.getRawValue();
    this.persons.push({
      email: "",
      id: 1, nit: aux.nit, nombre: aux.nombre, apellido: aux.apellido, telefono: aux.telefono, direccion: aux.direccion, tipo_persona:aux.tipo_persona, estado: 1
    });

      localStorage.setItem("persons", JSON.stringify(this.persons));
    }

  deletePersona(id) {
    this.showLoader = true;
    const persona = this.persons.find(r => r.id === id)
    persona.estado = 0;
    this.showLoader = false;
  }

  activarPersona(id) {
    this.showLoader = true;
    const persona = this.persons.find(r => r.id === id)
    persona.estado = 1;
    this.showLoader = false;
  }


}
