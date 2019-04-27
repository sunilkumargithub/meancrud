import { Injectable } from '@angular/core';
import {EmployeeModel} from '../shared/employee.model';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetService {
  getresponsesubject = new Subject<EmployeeModel[]>();
getresponse: EmployeeModel[] = [];
  constructor(private http: Http, private httpclient: HttpClient) { }


  get() {

this.httpclient.get<{message: string, employee: EmployeeModel[]}>
('http://localhost:4000/employee').subscribe((response) => {
 this.getresponse = response.employee;

this.getresponsesubject.next([...this.getresponse]);
console.log('getresponse', this.getresponse);


});


  }
}
