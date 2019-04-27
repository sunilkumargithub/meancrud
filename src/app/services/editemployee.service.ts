import { Injectable } from '@angular/core';
import {EmployeeModel} from '../shared/employee.model';
import {Subject, Observable} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EditemployeeService {
  Employee = [];
  employeesub = new Subject();

  constructor(private router: Router) { }

  getemployee(employee, index) {

                //this.Employee = employee;
              this.Employee = employee;
             this.employeesub.next([this.Employee]);
              //this.router.navigate(['/editemployee']);
  }





}
