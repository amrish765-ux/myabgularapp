import { CommonModule, } from '@angular/common';
import { Component,OnChanges,afterNextRender, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['message']) {
      console.log('Message has changed:', changes['message'].currentValue);
    }
    if (changes['alertType']) {
      console.log('Alert Type has changed:', changes['alertType'].currentValue);
    }
  }
  @Input() message:string="";
  @Input() alertType:string=''
  alertMode:string="hit alert"


  afterNextRender(){

  }
}
