import {ActionReducerMap, createSelector, createFeatureSelector} from '@ngrx/store';
import { ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState } from '../../app.state';

import * as fromreducer from './getstudentreducer.reducer';
import { environment } from '../../../environments/environment';

export const reducers: ActionReducerMap<AppState> = {
  istudentstate : fromreducer.getstudentreducer
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState, action: any): AppState {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];

// export const getProductState = createFeatureSelector<ProductState>('LOADSTUDENT');

// student state
// export const getStudentState = createSelector(getProductState, (state: ProductState) => state.students);

// export const getAllStudents = createSelector(getStudentState, fromstd.getstudentlist);
// export const getStudentsLoading = createSelector(getStudentState, fromstd.getstudentloading);
// export const getStudentsLoaded = createSelector(getStudentState, fromstd.);
// export const getAllStudents = createSelector(getStudentState, fromstd.getstudentlist);

