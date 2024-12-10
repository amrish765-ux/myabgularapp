import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-view-child',
  imports: [AlertComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.scss'
})
export class ViewChildComponent implements AfterViewInit {
  @ViewChild('txt') textBox?:ElementRef

  @ViewChild(AlertComponent)alertComp?:AlertComponent
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const value=this.textBox?.nativeElement.value;
    const alertmode=this.alertComp?.alertMode;
    // console.log(alertmode)
    
    
    
  }

}
