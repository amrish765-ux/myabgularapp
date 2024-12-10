import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.scss'
})
export class MyButtonComponent {
@Input() btnText:string=''
@Input() btnClass:string=''

@Output() onbtnclick=new EventEmitter<any>();



onclick(){
  this.onbtnclick.emit("hii from child");
  
}
}
