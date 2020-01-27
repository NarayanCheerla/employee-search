import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './shared/services/employee.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Angular Demo';

  employess = [];

  constructor(public auth: AuthService, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employess = this.employeeService.getEmployees();
  }

  delete(i) {
    alert(`deleting ${i + 1} row`);
  }

  edit(i) {
    alert(`editing ${i + 1} row`);
  }

}
