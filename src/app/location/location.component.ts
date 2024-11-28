import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  locationId!: string;
  locationName = '';
  currentConditions: any;
  fiveDayForecast: any;
  hourlyForecast: any;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.locationId = this.route.snapshot.paramMap.get('id')!;
    this.getLocationDetails();
  }

  getLocationDetails(): void {
    this.weatherService.getCurrentConditions(this.locationId)
      .subscribe(data => this.currentConditions = data[0]);
    this.weatherService.getFiveDayForecast(this.locationId)
      .subscribe(data => this.fiveDayForecast = data);
    this.weatherService.getHourlyForecast(this.locationId)
      .subscribe(data => this.hourlyForecast = data);
  }

  getWeatherIcon(iconId: number): string {
    return `https://developer.accuweather.com/sites/default/files/${iconId < 10 ? '0' : ''}${iconId}-s.png`;
  }

  addToFavorites(): void {
    this.weatherService.addFavorite({ id: this.locationId, name: this.locationName, currentConditions: this.currentConditions.WeatherText });
  }
}
