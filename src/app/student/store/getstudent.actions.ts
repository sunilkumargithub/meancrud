import { Action } from '@ngrx/store';
import { StudentModel, IStudent } from './student.model';
// import { Action } from 'rxjs/internal/scheduler/Action';



export const LOAD_STUDENT         = '[istudentstate] Get Student';
export const LOAD_STUDENT_SUCCESS = '[istudentstate] Get Student Success';

export class LoadStudents implements Action {
  readonly type = LOAD_STUDENT;
}

export class LoadStudentSuccess implements Action {
readonly type = LOAD_STUDENT_SUCCESS;
constructor(public payload: IStudent[]) {}

}

export type StudentActions = LoadStudents | LoadStudentSuccess;
