import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  responsemessage;
  responsesub = new Subject();


  constructor(private httpclient: HttpClient,private router: Router) { }

  updateEmployee(updatevalue, id) {


    console.log('update value is', updatevalue);
    console.log('update id is', id);

    const params = new HttpParams().append('email', updatevalue.email);
console.log('params is ', params);
this.httpclient.put('http://localhost:4000/employee', updatevalue, {params})
.subscribe((response) => {
console.log(response);
this.responsemessage = 'employee values updated successfully';
this.responsesub.next(this.responsemessage);
}),
this.responsemessage = 'Employee Not Updated ,Something went wrong';
this.responsesub.next(this.responsemessage);


  }







  deleteemployee(employee) {

    const params = new HttpParams().append('_id', employee._id);
    console.log('params is ', params);
    this.httpclient.delete<{message: string, docs: string}>('http://localhost:4000/employee', {params})
    .subscribe((response) => {
    console.log(response);
    if (response.message === 'ok') {
      this.responsemessage = 'employee Deleted successfully';
      this.responsesub.next(this.responsemessage);
    }
    if (response.message !== 'ok') {
      this.responsemessage = 'employee Deleted successfully';
      this.responsesub.next(this.responsemessage);
    }
this.router.navigate(['/']);

    }), this.responsemessage = 'something went wrong';
    this.responsesub.next(this.responsemessage);

  }


}
