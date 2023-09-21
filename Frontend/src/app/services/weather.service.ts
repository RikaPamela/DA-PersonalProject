import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherApiBaseUrl = "https://vision-weather-map.p.rapidapi.com/Current-weather/";
  XRapidAPIHostHeaderName = "X-RapidAPI-Host";
  XRapidAPIHostHeaderValue = "vision-weather-map.p.rapidapi.com";
  XRapidAPIKeyHeaderName = "X-RapidAPI-Key";
  XRapidAPIKeyHeadervalue = "74f77f465cmshdac9c07c2252115p1a1708jsndf52b65a22b8";


  constructor(private http :HttpClient) { }

getweatherData(cityName:string){
  this.http.get(this.weatherApiBaseUrl,{
    headers:new HttpHeaders()
    .set(this.XRapidAPIHostHeaderName, this.XRapidAPIHostHeaderValue)
    .set(this.XRapidAPIKeyHeaderName, this.XRapidAPIKeyHeadervalue),
    params:new HttpParams()
    .set('q',cityName)
    .set('units','imperial')
    .set('mode','json')


  })
}

}
