import { Component,OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'myApp';

  employess = [];

constructor(private employeeService: EmployeeService){}

ngOnInit(){
  this.employess = this.employeeService.getEmployees();
  }

  delete(i){
    alert(`deleting ${i+1} row`);
  }

  edit(i){
    alert(`editing ${i+1} row`);
  }

}
