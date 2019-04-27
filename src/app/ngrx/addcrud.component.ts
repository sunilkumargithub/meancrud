import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { EmployeeModel } from '../shared/employee.model';
import * as CrudActions from '../../Actions/crud.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-addcrud',
  templateUrl: './addcrud.component.html',
  styleUrls: ['./addcrud.component.css']
})
export class AddCrudComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  addcrudmethod(name, email, mobile, salary) {
    this.store.dispatch(new CrudActions.AddTutorial({name: name, email: email,mobile:mobile,salary:salary} ) );
 console.log('storeis' , this.store);
  }

  ngOnInit() {
  }

}
