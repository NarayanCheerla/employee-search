import { Injectable } from '@angular/core';

const EMP = [
    {
      'id':1,
      'name':'abce',
      'userName':'akd',
      'email':'abc@gmail.com'
    },
    {
      'id':2,
      'name':'alksdfj',
      'userName':'akd',
      'email':'test@gmail.com'
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

 
}
