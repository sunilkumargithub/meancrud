import { Action } from '@ngrx/store';
import { StudentModel } from './student.model';

export const  ADD_STUDENT = '[STUDENT] ADD';


export class AddStudent implements Action {
readonly type = ADD_STUDENT;
constructor(public payload: StudentModel) {}
}

export type Actions = AddStudent;
