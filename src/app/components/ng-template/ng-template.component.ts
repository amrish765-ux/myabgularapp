import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  imports: [CommonModule],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.scss'
})
export class NgTemplateComponent {


  isLoggedUserName: boolean = true;
  loggerUserName:string="amrish";


  @ViewChild('dynamic') dynamicTemplate:TemplateRef<any> | undefined
  @ViewChild('dynamicContainer',{read:ViewContainerRef}) dynamicContainer:ViewContainerRef | undefined 
  loadTemplate(){
    if(this.dynamicTemplate)
    this.dynamicContainer?.createEmbeddedView(this.dynamicTemplate)
  }
}
