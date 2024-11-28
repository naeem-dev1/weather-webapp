import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface CurrentConditions {
  WeatherIcon: number;
  WeatherText: string;
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private API_KEY = 'api-key';
  private BASE_URL = 'https://dataservice.accuweather.com/';
  private favorites: Array<{ id: string; name: string; currentConditions: { WeatherIcon: number; WeatherText: string } }> = [];

  constructor(private http: HttpClient) {}

  getCurrentConditions(locationKey: string): Observable<any> {
    return this.http.get(
      `${this.BASE_URL}/currentconditions/v1/${locationKey}?apikey=${this.API_KEY}`
    );
  }

  getFiveDayForecast(locationKey: string): Observable<any> {
    return this.http.get(
      `${this.BASE_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${this.API_KEY}`
    );
  }

  getHourlyForecast(locationKey: string): Observable<any> {
    const url = `${this.BASE_URL}/forecasts/v1/hourly/12hour/${locationKey}?apikey=${this.API_KEY}`;
    return this.http.get<any>(url);
  }

  searchLocation(query: string): Observable<any> {
    return this.http.get(
      `${this.BASE_URL}/locations/v1/cities/search?apikey=${this.API_KEY}&q=${query}`
    );
  }
  getFavorites(): Array<{ id: string; name: string; currentConditions: CurrentConditions }> {
    return [...this.favorites]; // Returning a copy of favorites for immutability
  }

  addFavorite(location: { id: string; name: string; currentConditions: CurrentConditions }): void {
    this.favorites = [...this.favorites, location]; // Creating a new array to update favorites
  }

  removeFavorite(location: { id: string; name: string; currentConditions: CurrentConditions }): void {
    this.favorites = this.favorites.filter(fav => fav.id !== location.id);
  }


}
