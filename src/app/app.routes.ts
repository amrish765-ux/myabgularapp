import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { StructuralDirComponent } from './components/structural-dir/structural-dir.component';
import { IflseComponent } from './components/iflse/iflse.component';
import { ForComponent } from './components/for/for.component';
import { SwitchComponent } from './components/switch/switch.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { HttpClientComponent } from './components/http-client/http-client.component';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { NgcontainerComponent } from './components/ngcontainer/ngcontainer.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './services/auth.guard';
import { MaterailiconComponent } from './components/materailicon/materailicon.component';

export const routes: Routes = [
    { path: '', redirectTo:'login', pathMatch:'full'},

    { path: 'login', component: LoginComponent },
    { path: '', component: LayoutComponent,children:[
        { path: 'add-employee', component: AddEmployeeComponent },
        { path: 'emp-list', component: EmployeeListComponent },
        { path: 'databinding', component: DatabindingComponent
            ,canActivate:[authGuard]
         },
        { path: 'struct', component: StructuralDirComponent },
        { path: 'if-else', component: IflseComponent },
        { path: 'for', component: ForComponent },
        { path: 'switch-case', component: SwitchComponent },
        { path: 'pipe', component: PipeComponent },
        { path: 'template-form', component: TemplateFormComponent },
        { path: 'reactive-form', component: ReactiveFormComponent },
        { path: 'http-client', component: HttpClientComponent },
        { path: 'ngtemplate', component: NgTemplateComponent },
        { path: 'ngcontainer', component: NgcontainerComponent },
        { path: 'view', component: ViewChildComponent },
        { path: 'materail', component: MaterailiconComponent },
    ] },

];
