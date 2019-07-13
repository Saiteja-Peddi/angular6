import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
first_name : String;
last_name:String;
email : String;
mobile : number;
pass : String;
date : String;
gender: String;
 age: String;


constructor() { }



  setUserData(fn :String,ln:String, email : String, pass : String,mobile: number,gender: String,age: String)
  {
    this.first_name=fn;
    this.last_name=ln;
    this.email=email;
    
    this.pass=pass;
    this.mobile=mobile;
    this.gender=gender;
    this.age=age;
    
  }
  
  public getfirstName()
  {
   
    return this.first_name;
  }
  public getlasttName()
  {
    return this.last_name;
  }
  public getEmail()
  {
    
    return this.email;
  }
  public getMobile()
  {
    
    return this.mobile;
  }
  public getGender()
  {
    
    return this.gender;
  }
  public getAge()
  {
    
    return this.age;
  }
  
  

}