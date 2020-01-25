import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AddEmployeeRoutingModule } from './add-employee-routing.module';
import { AddEmployeeComponent } from './add-employee.component';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@NgModule({
  declarations: [AddEmployeeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddEmployeeRoutingModule
  ],
  exports: [AddEmployeeComponent],
  providers: [EmployeeService]
})
export class AddEmployeeModule { }
