import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, Validators} from '@angular/forms';
import { Iperson, IUser } from './Iperson';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  firstname:string="";
  Middlename:string="";
  lastname:string="";
  date:string="";
  add1:string="";
  pincode:string="";

  user:IUser={
    gender:"",
    }
    genders:any[]=[
     {viewValue:-1,Text:"Select Gender"},
     {viewValue:1,Text:"Male"},
     {viewValue:2,Text:"Female"}
   ];
   person:Iperson={
    department:"",
   }
   departments:any[]=[
    {viewValue:-1,Text:"Select Department"},
    {viewValue:1,Text:"IT"},
    {viewValue:2,Text:"HR"},
    {viewValue:3,Text:"Payroll"},
    {viewValue:4,Text:"Networking"},
    {viewValue:5,Text:"Admin"}

   ];
 

  constructor() { }

  ngOnInit(): void {
  }
  saveUser(form:NgForm){
    console.log(form);
      }
      onclick(){
        if(this.firstname=="" || this.lastname=="" || this.date=="" || this.add1=="" || this.pincode==""){
          alert("Enter Proper Details");
        }
        else{
          alert("Details Entered Successfully")
        }
      }

}
