import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';

//import {IstudentState} from '../store/getstudentreducer.reducer';
//import * as fromstore from '../store/index';

import * as fromActions from '../store/getstudent.actions';
import { Observable } from 'rxjs';
import { StudentModel, IStudent } from '../store/student.model';
import * as fromreducer from '../store/getstudentreducer.reducer';
import { IstudentState } from '../../app.state';

@Component({
  selector: 'app-getstudent',
  templateUrl: './getstudent.component.html',
  styleUrls: ['./getstudent.component.css']
})



export class GetstudentComponent implements OnInit {
cstudents$: Observable<IStudent[]>;


   constructor(private store: Store<IstudentState>) {

this.cstudents$ = this.store.select('istudentstate');

     }

  ngOnInit() {

  }

  getstudent() {

    this.store.dispatch(new fromActions.LoadStudents);


console.log('mapped student are ', this.cstudents$ );
  }

}
