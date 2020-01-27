import { Component, OnInit } from '@angular/core';


import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.scss']
})
export class EmployeeSearchComponent implements OnInit {

  employess = [];
  rows = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
    this.rows = Array.from({ length: 5 }, () => {
      return { editable: false };
    });

  }

  getEmployees() {
    this.employess = this.employeeService.getEmployees();
  }

  delete(i) {
    this.employeeService.deleteEmployee(i);
    this.getEmployees();
  }

  edit(i) {
    this.rows[i] = { editable: true };
  }

  update(i) {
    this.rows[i] = { editable: false };
    this.employeeService.updateEmployees(this.employess);
    this.getEmployees();
  }

}
