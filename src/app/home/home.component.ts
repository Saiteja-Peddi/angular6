import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router, private service : DataService) { }
  name =this.service.getfirstName();
  
   name1=this.service.getlasttName();
   email=this.service.getEmail();
   mobile=this.service.getMobile();
   gender=this.service.getGender();
   age=this.service.getAge();

  ngOnInit() {
    // var flag=this.service.getFlag();

  // if(flag==1){
  //  name =this.service.getfirstName();
  //  name1=this.service.getlasttName();
  //  email=this.service.getEmail();
  //  date=this.service.getDate();
  // }
  // else{
   
  // }
   
    
  }
  onload(){
    
  
  }

  

  


}