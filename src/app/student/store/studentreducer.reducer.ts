import { StudentModel } from './student.model';
import * as studentaction from './student.actions';

const initialstudent = {
  name: 'sunil',
email: 'sunil@gmail.com',
mobile: '94937458',
address: 'kolkata'
};

export function studentreducer(state: StudentModel[]= [initialstudent], action: studentaction.Actions) {



switch (action.type) {
  case studentaction.ADD_STUDENT: return [...state, action.payload];

  default: return state;
}

}
