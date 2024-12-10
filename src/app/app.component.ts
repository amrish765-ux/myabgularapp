import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { StructuralDirComponent } from './components/structural-dir/structural-dir.component';
import { LayoutComponent } from "./components/layout/layout.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';
}
