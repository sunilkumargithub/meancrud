import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentModel, IStudent } from './student.model';
@Injectable({
  providedIn: 'root'
})
export class GetstudentService {

  constructor(private httpclient: HttpClient) { }

getstudent(): Observable<IStudent[]> {

return this.httpclient.get<IStudent[]>('http://localhost:4000/student');

}


}


