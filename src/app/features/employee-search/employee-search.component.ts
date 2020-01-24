import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.scss']
})
export class EmployeeSearchComponent implements OnInit {

  employess = [];

  employeeForm = this.fb.group({
    name: ['', Validators.required],
    userName: ['', Validators.required],
    emailId: ['',Validators.required],
    aliases: this.fb.array([
      this.fb.control('alias name')
    ])
  });

  get aliases() {
    return this.employeeForm.get('aliases') as FormArray;
  }

  constructor(private employeeService: EmployeeService, private fb: FormBuilder) { }

  ngOnInit(){
    this.getEmployees();
  }

  addAliases(){
    this.aliases.push(this.fb.control(''));
  }

  getEmployees(){
    this.employess = this.employeeService.getEmployees();
  }

  delete(i){
    this.employeeService.deleteEmployee(i);
    this.getEmployees();
  }

  edit(i){
    alert(`editing ${i+1} row`);
  }

  onSubmit() {
    this.employeeService.addEmployee(this.employeeForm.value);
    console.log(this.employeeForm.value);
    this.getEmployees();
  }

}
