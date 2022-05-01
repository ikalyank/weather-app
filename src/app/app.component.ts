import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../app/services/weather.service';
import { WeatherData } from './models/weather.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {

   }
   city: string='Visakhapatnam';
   weatherData?: WeatherData;
  ngOnInit(): void {
    this.getWeatherData(this.city);
    this.city='';

  }
  onSubmit() {
     this.getWeatherData(this.city);
     this.city='';
  }
  private getWeatherData(city: string) {
    this.weatherService.getWeatherData(city).subscribe({next:(response)=>{
      this.weatherData=response;
      console.log(response)}});
  }
  title = 'weather-app';

}
