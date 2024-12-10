import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userObj:any={
    userName:'',
    password:''
  }
  router=inject(Router)

  onlogin(){

    if(this.userObj.userName=="admin"&&this.userObj.password=="1234"){
      alert("login successs");
      localStorage.setItem('loginkey',this.userObj.userName)
      this.router.navigateByUrl("databinding")
    }else{
      alert("wrong credetials ")
    }
  }

}
