// import { StudentModel } from './student.model';
import * as fromActions from '../store/getstudent.actions';
 import {IstudentState} from '../../app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const initialstate: IstudentState = {
  students: []

};



export function getstudentreducer
  (state = initialstate,
   action: fromActions.StudentActions): IstudentState {
  switch (action.type) {

    case  fromActions.LOAD_STUDENT: {
      return {
        // ...state,
        students: []
    };
  }
    case  fromActions.LOAD_STUDENT_SUCCESS: {
console.log('payload is ' , action.payload);
const students = action.payload;
      return {
        ...state,
       students
         };
  }


  }


return state;
  }


export const getstudentlist = (state: IstudentState) => state.students;

export const getStudentState = createFeatureSelector<IstudentState>('istudentstate');

export const getstudentdata = createSelector(
  getStudentState,
    (state: IstudentState) => state.students
);
