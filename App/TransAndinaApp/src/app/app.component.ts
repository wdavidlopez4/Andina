import { Component, OnInit } from '@angular/core';
import { VehicleService } from './Service/vehicle/vehicle-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicleService.getVehicles()
      .subscribe(response => {
        localStorage.setItem("vehicles", JSON.stringify(response));
      });
  }
  title = 'TransAndinaApp';
}
