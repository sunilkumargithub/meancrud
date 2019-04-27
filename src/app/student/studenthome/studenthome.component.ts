import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as studentactions from '../store/student.actions';
import { StudentModel } from '../store/student.model';
import { StudentState1 } from '../../app.state';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {

  constructor(private router: Router, private store: Store<StudentState1>) { }

  ngOnInit() {
  }


  oncreate(name, email, mobile, address) {
console.log(name, mobile, email, address);
this.store.dispatch(new studentactions.AddStudent ({name, email, mobile, address}));
console.log('student store is :' , this.store);
  }

}
