import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {DataService} from '../data.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  private appId: string;
  private appCode: string;
  public weather: any;
  public configUrl: any;
  public we:String;
    weatherForm: FormGroup;
  constructor(private http: HttpClient,private service : DataService,private formBuilder: FormBuilder) { 
     this.appId = "KDD8sNBmbq37yXhkOutu";
        this.appCode = "ojaqyAvuOEyFHwt_LjK3ug";  
        this.weather = [];
  }

  ngOnInit() {
    this.weatherForm = this.formBuilder.group({
            weather: ['', [Validators.required]],
            
        });
     
      
  }
  func(data){
      
      $(".wea").show();
      this.configUrl = "https://maps.googleapis.com/maps/api/geocode/json?address="+data.weather+"&key=AIzaSyDvrQNLU4NALrtXE4StvhzMiWbdUIfN7vk";
      this.http.get(this.configUrl)
      .pipe(map(result => (<any>result).results[0].geometry.location))
      .subscribe((result)=>{
        
        console.log(result.lat,result.lng);
            this.getWeather(result.lat,result.lng);
        },error => {
            
            alert("Enter correct city");
            $(".wea").hide();
            console.error(error);
        }
        
        );
  }




  public getWeather(lat: any,lng: any) {
    this.http.jsonp("https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&latitude=" + lat + "&longitude=" +lng + "&app_id=" + this.appId + "&app_code=" + this.appCode, "jsonpCallback")
        .pipe(map(result => (<any>result)))
        .subscribe(result => {
          
            this.weather = result.dailyForecasts.forecastLocation.forecast;
            
             console.log(result);
        }, error => {
            
            console.error(error);
        });
}

}