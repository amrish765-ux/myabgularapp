import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {

  studentObj:any={
    firstName:'',
    lastName:'',
    userName:'',
    city:'',
    state:'',
    zipCode:'',
    isAcceptTerm:false
  }

  formValue:any;

  onSubmit(){
    debugger;
    this.formValue=this.studentObj
    
  }

  clickResetForm(){
    this.studentObj={
      firstName:'',
    lastName:'',
    userName:'',
    city:'',
    state:'',
    zipCode:'',
    isAcceptTerm:false
    }
  }

  

}
