import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-ngcontainer',
  imports: [CommonModule],
  templateUrl: './ngcontainer.component.html',
  styleUrl: './ngcontainer.component.scss'
})
export class NgcontainerComponent {

  isContainer:boolean=false;
  userList:any[]=[]
  http=inject(HttpClient)
  getAllUser(){
    
    this.http.get("https://jsonplaceholder.typicode.com/users")
    .subscribe((res:any)=>{
      
      this.userList=res;
    },(error)=>{
      debugger;
    })
   }
}
