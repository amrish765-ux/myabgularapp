import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-pipe',
  imports: [NaPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss'
})
export class PipeComponent {
  student:any={
    name:'amrish',
    firstname:"kumar",
    lastname:"kumar",
    address:{
      city:"hyderabad",
      state:"telangana"
    },
    state:''
  }

}
