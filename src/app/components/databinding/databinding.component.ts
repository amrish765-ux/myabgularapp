import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.scss'
})
export class DatabindingComponent {
  courseName: string = "Angular 18";
  inputType="checkbox";
  rollnumber:number=123;
  isIndian:boolean=false;
  myClassName:string="bg-primary";
  stateName:string="up";

  firstName=signal("hey man")

  currentDate:Date=new Date();

  constructor(){
    
  }
  showAlert(message:string){
    alert(message)
  }
  chnageCourseName(){
    this.courseName="Reacktjs";
    this.firstName.set("how are you man?");
  }
}
