import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,JsonPipe,AlertComponent],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  studentForm:FormGroup=new FormGroup({
    firstName:new FormControl("",[Validators.required,Validators.minLength(3)]),
    lastName:new FormControl(),
    userName:new FormControl("@gmail.com",[Validators.email]),
    city:new FormControl(),
    state:new FormControl(),
    zipCode:new FormControl(),
    isAcceptedTerm:new FormControl()
  });


  formValue:any;
  onSubmit(){
    debugger
    this.formValue=this.studentForm.value;

  }
  clickResetForm(){

  }
}
