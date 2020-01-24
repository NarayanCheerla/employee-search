import { Injectable } from '@angular/core';

const EMP = [
    {
      'name':'abce',
      'userName':'akd',
      'emailId':'abc@gmail.com',
      'aliases': ['abc','xyz']
    },
    {
      'name':'alksdfj',
      'userName':'akd',
      'emailId':'test@gmail.com',
      'aliases': ['asdf','asdf']
    }
];

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return EMP;
  }

  addEmployee(emp){
    EMP.push(emp);
  }

  deleteEmployee(index){
    EMP.splice(index, 1);
  }
 
}
