import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StudentModel } from '../../store/student.model';
import { Observable } from 'rxjs';
import { StudentState1 } from '../../../app.state';

@Component({
  selector: 'app-studentread',
  templateUrl: './studentread.component.html',
  styleUrls: ['./studentread.component.css']
})
export class StudentreadComponent implements OnInit {
student: Observable<StudentModel[]>;

  constructor(private store: Store<StudentState1>) {

    this.student = store.select('varAddStudent');
    //console.log('read student componet' , this.student);
   }

  ngOnInit() {
  }

}
