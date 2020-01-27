import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './shared/login/login.module';
import { EmployeeSearchModule } from './features/employee-search/employee-search.module';
import { LogoutModule } from './shared/logout/logout.module';
import { CoreModule } from './core/core.module';
import { AddEmployeeModule } from './features/add-employee/add-employee.module';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    LogoutModule,
    LoginModule,
    BrowserModule,
    AppRoutingModule,
    EmployeeSearchModule,
    AddEmployeeModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
