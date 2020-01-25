import { Component, OnInit } from '@angular/core';


import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.scss']
})
export class EmployeeSearchComponent implements OnInit {

  employess = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(){
    this.getEmployees();
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

}
