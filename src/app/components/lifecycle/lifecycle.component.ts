import { Component,OnChanges OnInit,DoCheck,AfterViewChecked,AfterViewInit,AfterContentInit,AfterContentChecked,OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss'
})
export class LifecycleComponent implements OnInit,DoCheck,AfterViewInit,OnChanges,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy {
  firstName: string;

  /**
   *
   */
  constructor() {
    console.log("constructor")
    this.firstName=""
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterContentChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
   console.log("ngonit")
  }


ngDoCheck():void{

}

}
