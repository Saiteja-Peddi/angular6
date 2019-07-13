import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../data.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fname :String;
  lname : String;
  eml : String;
  mbl : number;
  gend:String;
  age:String;
   registerForm: FormGroup;
   submitted = false;
   
  constructor(private router : Router, private service : DataService,private formBuilder: FormBuilder) { }
  ngOnInit() {
    $(document).ready(function() {
            $('select').formSelect();
         });
    this.registerForm = this.formBuilder.group({
            firstName: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]],
            lastName: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]],
            email: ['', [Validators.required, Validators.email]],
            mobile: ['', [Validators.required, Validators.pattern(/^[6789][0-9]{9,9}$/)]],
            password: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(16)]],
            gender:['male',[Validators.required]],
            age: ['',[Validators.required]]
            
        });
       
  }
  get f() { return this.registerForm.controls; }

  func(data){
    
    this.submitted = true;
    if (this.registerForm.invalid) {
            return;
        }
        $(".ack").show();
       

        this.fname=data.firstName;
        this.lname=data.lastName;
        this.eml=data.email;
        this.mbl=data.mobile;
        this.gend=data.gender;
        this.age=data.age;
    
    localStorage.setItem(data.email,JSON.stringify(data));
    this.service.setUserData(data.firstName,data.lastName,data.email,data.password,data.mobile,data.gender,data.age);

    //this.router.navigateByUrl('\home');
    
  }
  

  

}