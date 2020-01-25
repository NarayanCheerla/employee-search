import { Component } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {

  constructor(private employeeService: EmployeeService, private fb: FormBuilder) { }

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

  addAliases(){
    this.aliases.push(this.fb.control(''));
  }

   onSubmit() {
    this.employeeService.addEmployee(this.employeeForm.value);
    console.log(this.employeeForm.value);
  }

}
