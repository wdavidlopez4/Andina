import { Component, OnInit } from '@angular/core';
import { ProgrammingService } from './Service/programming/programming-service';
import { RouteService } from './Service/route/route-service';
import { VehicleService } from './Service/vehicle/vehicle-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private vehicleService: VehicleService,
    private programmingService: ProgrammingService,
    private routeService: RouteService) { }

  ngOnInit(): void {
    this.routeService.getRoutes()
      .subscribe(response => {
        localStorage.setItem("routes", JSON.stringify(response));
      });

    this.programmingService.getProgrammings()
      .subscribe(response => {
        localStorage.setItem("programmingRoutes", JSON.stringify(response));
      });

    this.vehicleService.getVehicles()
      .subscribe(response => {
        localStorage.setItem("vehicles", JSON.stringify(response));
      });
  }
  title = 'TransAndinaApp';
}
