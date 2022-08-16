import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students:any[]=[
    {Studentid:1,name1:'TOM',name2:'K',name3:'Mack',RollNo:'10',Class:9,Science:45,English:32,Hindi:33,Drawing:80,Maths:98},
    {Studentid:2,name1:'Poko',name2:'R',name3:'Hack',RollNo:'12',Class:9,Science:87,English:56,Hindi:53,Drawing:81,Maths:99},
    {Studentid:3,name1:'Loko',name2:'L',name3:'Jack',RollNo:'34',Class:9,Science:67,English:37,Hindi:77,Drawing:82,Maths:100},
    {Studentid:4,name1:'Jerry',name2:'P',name3:'Sack',RollNo:'56',Class:9,Science:88,English:89,Hindi:86,Drawing:83,Maths:50},
    {Studentid:5,name1:'Gyan',name2:'G',name3:'Rack',RollNo:'23',Class:9,Science:98,English:94,Hindi:93,Drawing:84,Maths:65},
    {Studentid:6,name1:'Nobita',name2:'S',name3:'Kack',RollNo:'34',Class:9,Science:34,English:32,Hindi:33,Drawing:85,Maths:25},
    {Studentid:7,name1:'Shinchan',name2:'N',name3:'Lack',RollNo:'13',Class:9,Science:23,English:24,Hindi:39,Drawing:86,Maths:15},
    {Studentid:8,name1:'Bheem',name2:'M',name3:'Pack',RollNo:'37',Class:9,Science:24,English:45,Hindi:23,Drawing:87,Maths:45},
    {Studentid:9,name1:'Raju',name2:'V',name3:'Tack',RollNo:'23',Class:9,Science:26,English:23,Hindi:13,Drawing:88,Maths:25},
    {Studentid:10,name1:'Chutki',name2:'A',name3:'Gack',RollNo:'21',Class:9,Science:31,English:32,Hindi:43,Drawing:89,Maths:45}
    
    
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
