import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private API_KEY = 'api-key';
  private BASE_URL = 'https://dataservice.accuweather.com/';

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

  searchLocation(query: string): Observable<any> {
    return this.http.get(
      `${this.BASE_URL}/locations/v1/cities/search?apikey=${this.API_KEY}&q=${query}`
    );
  }
}
