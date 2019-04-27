import { EmployeeModel} from './shared/employee.model';
import { StudentModel, IStudent } from './student/store/student.model';

/* export interface AppState {
  readonly Addcrud: EmployeeModel[];
} */
export interface StudentState1 {
  readonly varStudentAdd: StudentModel[];
}
export interface GetStudentState1 {
  readonly varGetStudent: StudentModel[];
}
////////////////

export interface AppState {
istudentstate: IstudentState;
}

export interface IstudentState {
students: IStudent[];

}
