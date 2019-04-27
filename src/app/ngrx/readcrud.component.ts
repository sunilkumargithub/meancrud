import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { EmployeeModel } from '../shared/employee.model';
import { AppState } from './../app.state';
import { OnInit, Component } from '@angular/core';
import * as CrudActions from '../../Actions/crud.actions';
@Component({
  selector: 'app-readcrud',
  templateUrl: './readcrud.component.html',
  styleUrls: ['./readcrud.component.css']
})
export class ReadCrudComponent implements OnInit {

  // Section 1
 Employee: Observable<EmployeeModel[]>;

  // Section 2
  constructor(private store: Store<AppState>) {
    this.Employee = store.select('Addcrud');
    console.log('constructor employee is ' , this.Employee);
  }

  delTutorial(index) {
    this.store.dispatch(new CrudActions.RemoveTutorial(index) );
  }
  ngOnInit() {}

}



