import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.scss'
})
export class StructuralDirComponent {
  isDiv1Visible: boolean = false;
  isDiv2Visible:boolean=false;

  div1bgcolor:string='bg-primary'


  num1:string='';
  num2:string='';

  isActive:boolean=false;
  selectedState:string='';

  isDiv2Active:boolean=true;

  customSolor:any={
    'color':'white',
    'background-color':'red',
    'border-radius':'50px',
    'height':'100px'
  }

  cityArray:string[]=['pune','sre','rk']


  studentList:any[]=[
    {studentid:1,totalmarks:23,gender:"male",name:"amms",city:"sjhdbfh",isActive:false},
    {studentid:2,totalmarks:76,gender:"female",name:"amms",city:"sjhdbfh",isActive:false},
    {studentid:3,totalmarks:98,gender:"male",name:"amms",city:"sjhdbfh",isActive:true},
    {studentid:4,totalmarks:33,gender:"female",name:"amms",city:"sjhdbfh",isActive:false},
  ]

  showDiv1(){
    this.isDiv1Visible=true;
  }
  hideDiv1(){
    this.isDiv1Visible=false;
  }
  toggleDiv2(){
    this.isDiv2Visible=!this.isDiv2Visible;
  }

  addRedColor(){
    this.div1bgcolor='bg-primary';
  }
  addBlueColor(){
    this.div1bgcolor='bg-danger'
  }

  istoggleDiv2(){
    this.isDiv2Active=!this.isDiv2Active;
  }
}
