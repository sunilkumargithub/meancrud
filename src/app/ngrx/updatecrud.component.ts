import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { EmployeeModel } from '../shared/employee.model';
import { AppState } from './../app.state';
import { OnInit, Component } from '@angular/core';
import * as CrudActions from '../../Actions/crud.actions';
@Component({
  selector: 'app-updatecrud',
  templateUrl: './updatecrud.component.html',
  styleUrls: ['./updatecrud.component.css']
})
export class UpdateCrudComponent implements OnInit {

  // Section 1
 Employee: Observable<EmployeeModel[]>;

  // Section 2
  constructor(private store: Store<AppState>) {
    this.Employee = store.select('Addcrud');
  }

  delTutorial(index) {
    this.store.dispatch(new CrudActions.RemoveTutorial(index) );
  }
  ngOnInit() {}

}



