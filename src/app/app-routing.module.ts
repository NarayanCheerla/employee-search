import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeSearchComponent } from './features/employee-search/employee-search.component';
import { LoginComponent } from './features/login/login.component';
import { LogoutComponent } from './features/logout/logout.component';


const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'employee',
    component: EmployeeSearchComponent
  },
  {
    path:'logout',
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
