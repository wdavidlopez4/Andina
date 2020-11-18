import {Component, OnInit, ViewChild} from '@angular/core';
import {CreatePersonDialogComponent} from "../create-persons-dialog/create-persons-dialog.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Route} from "@angular/router";
import {Persona} from "../../models/Persona";
import {EditPersonDialogComponent } from '../edit-persons-dialog/edit-persons-dialog.component';
import {PersonService} from "../../Service/persons/person-service";

@Component({
  selector: 'app-list-person',
  templateUrl: './list-persons-dialog.component.html',
  styleUrls: ['../.././home/home.component.css','./list-persons-dialog.component.css']
})
export class ListPersonComponent implements OnInit {

  personSelectedId: any;
  showLoader: boolean = false;
  form: FormGroup;
  personsa: Persona[];

  @ViewChild('createPersonDialog', {static: true})
  createPersonDialog: CreatePersonDialogComponent;

  @ViewChild('editPersonDialog', {static: true})
  editPersonDialog: EditPersonDialogComponent;

  
  constructor(
    private personService: PersonService,
  ) {
  }

  persons = [
    {
      id: 1, nit: 1098102295, nombre: 'Adriana Paola', apellido: 'Goyeneche ', telefono: 31681261033, direccion: 'Cra 4 # 1-56', tipo_persona: 1, estado: 1
    },
    
  ];

  ngOnInit() {
    this.personService.getPerson()
      .subscribe(response => {
        this.personsa = response;
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
      id: 1, nit: aux.nit, nombre: aux.nombre, apellido: aux.apellido, telefono: aux.telefono, direccion: aux.direccion, tipo_persona:aux.tipo_persona, estado: 1,
    });
  }

  
}
