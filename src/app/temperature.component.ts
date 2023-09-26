import { Component, OnInit } from '@angular/core';
import { TemperatureService } from './temperature.service';

@Component({
 selector: 'app-temperature',
 templateUrl: './app.component.html',
 
})
export class TemperatureComponent implements OnInit {
 currentTemperature: number = 0;
 isMonitoring: boolean = false;

 constructor(private temperatureService: TemperatureService) { }

 ngOnInit(): void { }

 startMonitoring() {
   this.isMonitoring = true;
   this.monitorTemperature();
 }

 stopMonitoring() {
   this.isMonitoring = false;
 }

 private monitorTemperature() {
   if (this.isMonitoring) {
     this.temperatureService.getCurrentTemperature().subscribe((temperature: number) => {
       this.currentTemperature = temperature;
       setTimeout(() => this.monitorTemperature(), 2000); // Fetch data every 2 seconds
     });
   }
 }
}