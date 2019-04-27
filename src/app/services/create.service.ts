import { Injectable, OnInit } from '@angular/core';
import { EmployeeModel } from '../shared/employee.model';
import { Http } from '@angular/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CreateService  implements OnInit{
onchangestatus = new Subject<any>();
  Response;
  constructor(private http: Http) { }


ngOnInit() {

}

getemployee(employee: EmployeeModel) {



this.http.post('http://localhost:4000/employee' , employee)
.subscribe((response) => {
  this.Response = 'record created successfully';
this.onchangestatus.next(this.Response);
console.log(this.Response);

}),

 this.Response = 'Something went wrong!!';
    this.onchangestatus.next(this.Response);
}


}






