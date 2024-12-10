import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-iflse',
  imports: [UpperCasePipe],
  templateUrl: './iflse.component.html',
  styleUrl: './iflse.component.scss'
})
export class IflseComponent {
  firstName:string='angular'

  div1Visible:boolean=true;

  isWaringdiv:boolean=false;

  showdiv1(){
    this.div1Visible=true;
  }
  hidediv1(){
    this.div1Visible=false;
  }
  toggleshow(){
    this.isWaringdiv=!this.isWaringdiv;
  }

}
