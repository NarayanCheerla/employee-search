import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './features/login/login.module';
import { EmployeeSearchModule } from './features/employee-search/employee-search.module';
import { LogoutModule } from './features/logout/logout.module';
import { CoreModule } from './core/core.module';


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
    EmployeeSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
