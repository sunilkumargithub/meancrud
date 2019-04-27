import { Action } from '@ngrx/store'
import { EmployeeModel } from '../app/shared/employee.model';
import * as CrudActions from '../Actions/crud.actions';

// Section 1
const initialState: EmployeeModel = {
    name: 'Initial Tutorial',
    email: 'sunil@gmail.com',
    mobile: 985342722,
    salary: 1000000

};

// Section 2
export function Addreducer(state: EmployeeModel[] = [initialState], action: CrudActions.Actions) {

    // Section 3
    switch (action.type) {
        case CrudActions.ADD_CRUD:
            return [...state, action.payload];

        case CrudActions.REMOVE_CRUD:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}
