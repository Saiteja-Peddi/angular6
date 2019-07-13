import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AcknowledgeComponent } from './acknowledge/acknowledge.component';
import { LengthPipe } from './length.pipe';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'home',component:HomeComponent},
  { path: 'weather',component:WeatherComponent}]


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule,HttpClientModule,
        HttpClientJsonpModule,RecaptchaModule,
    RecaptchaFormsModule ],
  declarations: [ AppComponent, HelloComponent,RegisterComponent, HomeComponent, AcknowledgeComponent, LengthPipe, WeatherComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService,{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: '6LcQh60UAAAAAEQ9O2-BbLQz8R8UtUnSzi2PiOD4',
    } as RecaptchaSettings,
  }]
})
export class AppModule { }
