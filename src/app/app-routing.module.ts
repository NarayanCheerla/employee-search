import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeSearchComponent } from './features/employee-search/employee-search.component';
import { LoginComponent } from './shared/login/login.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { AddEmployeeComponent } from './features/add-employee/add-employee.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [

  {
    path: 'employee-search',
    component: EmployeeSearchComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employee-add',
    component: AddEmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
