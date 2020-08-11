import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {Users, UsersReducer, usersNode} from './date.reducer'
export interface State {
  [usersNode]: Users
}

export const reducers: ActionReducerMap<State> = {
  [usersNode]: UsersReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
