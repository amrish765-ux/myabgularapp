import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { error } from 'console';
import { Observable } from 'rxjs';
import { AlertComponent } from '../alert/alert.component';
import { CommonModule } from '@angular/common';
import { MyButtonComponent } from '../my-button/my-button.component';


interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-http-client',
  imports: [MyButtonComponent,AlertComponent,CommonModule],
  templateUrl: './http-client.component.html',
  styleUrl: './http-client.component.scss'
})


export class HttpClientComponent {

  userList:any[]=[]
  customersList:any[]=[]

  depObj:any={
    "depid":0,
    "depName":"",
    "deplogo":""
  }
  
  constructor(private http:HttpClient){

    this.getAllUser();
    
  }
   getAllUser(){
    
    this.http.get("https://jsonplaceholder.typicode.com/users")
    .subscribe((res:any)=>{
      
      this.userList=res;
    },(error)=>{
      debugger;
    })
   }

   getAllCustomers():void{
    this.http.get("")
   }

   createPost(post:Post):Observable<Post>{
    return this.http.post<Post>("https://jsonplaceholder.typicode.com/posts",post)
   }

   createNewPost():void{

    const newPost:Post={
      userId:10000,
      id:1,
      title:"string",
      body:"lorem50"
    }
    this.createPost(newPost).subscribe((res)=>{
      console.log("post created successfully")
    },(error)=>{
      console.log("error while createing the post",newPost)
    })

   }



   getdata(data:any){
    
   }



}
