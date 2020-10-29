import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ruta} from "../../models/Ruta";
import {RouteService} from "../../Service/route/route-service";

@Component({
  selector: 'app-create-stop-dialog',
  templateUrl: './create-stop-dialog.component.html',
  styleUrls: ['./create-stop-dialog.component.css']
})
export class CreateStopDialogComponent implements OnInit {

  display:string;
  form:FormGroup;
  showLoader: boolean = false;
  rutaId: number;


  @Output()
  createStop = new EventEmitter<Ruta>();

  constructor(
    private routeService: RouteService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    console.log(this.display)
    this.CreateForm();
  }

  CreateForm() {
    this.form = this.fb.group({
      ruta_id: [this.rutaId],
      nombre: ['', Validators.required]

    });
  }

  onCreateStop(){
    const stop = this.form.getRawValue();
    this.createStop.emit(stop);
  }

}
