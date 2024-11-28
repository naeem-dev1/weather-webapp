import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

interface CurrentCondition {
  WeatherIcon: number;
  WeatherText: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fiveDayForecast: any;
  currentConditions: any;
  favorites: Array<{ id: string; name: string; currentConditions: CurrentCondition }> = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getCurrentConditions();
    this.getFiveDayForecast();
    this.getFavorites();
  }

  getCurrentConditions(): void {
    this.weatherService.getCurrentConditions('349727') // Philadelphia location key
      .subscribe(data => this.currentConditions = data[0]);
  }

  getFiveDayForecast(): void {
    this.weatherService.getFiveDayForecast('349727') // Philadelphia location key
      .subscribe(data => this.fiveDayForecast = data);
  }

  getFavorites(): void {
    this.favorites = this.weatherService.getFavorites();
  }

  getWeatherIcon(iconId: number): string {
    return `https://developer.accuweather.com/sites/default/files/${iconId < 10 ? '0' : ''}${iconId}-s.png`;
  }

  goToLocation(locationId: string): void {
    // Navigate to location details
  }
}
