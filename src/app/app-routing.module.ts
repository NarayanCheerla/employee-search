import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeSearchComponent } from './features/employee-search/employee-search.component';
import { LoginComponent } from './features/login/login.component';
import { LogoutComponent } from './features/logout/logout.component';
import { AddEmployeeComponent } from './features/add-employee/add-employee.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path: 'welcome',
    loadChildren: () => import('./features/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path:'employee-search',
    component: EmployeeSearchComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'employee-add',
    component: AddEmployeeComponent
  },
  {
    path:'logout',
    component: LogoutComponent
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
