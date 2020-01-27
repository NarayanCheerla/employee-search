import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { EmployeeSearchRoutingModule } from './employee-search-routing.module';
import { EmployeeSearchComponent } from './employee-search.component';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@NgModule({
  declarations: [EmployeeSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeSearchRoutingModule
  ],
  providers: [EmployeeService],
  exports: [EmployeeSearchComponent]
})
export class EmployeeSearchModule { }
