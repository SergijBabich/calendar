import { createFeatureSelector,createSelector } from '@ngrx/store';
import { usersNode, Users } from '../reducers/date.reducer';

export const selectUserFeature = createFeatureSelector<Users>(usersNode);

export const selectUser = createSelector(
    selectUserFeature,
    (state:Users) => state.users
);

export const selectUpdatedAt = createSelector(
    selectUserFeature,
    (state:Users) => state.updatedAt
) 