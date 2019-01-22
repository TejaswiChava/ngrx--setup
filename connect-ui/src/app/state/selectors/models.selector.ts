import { createSelector } from '@ngrx/store';


export const selectModelState = state => state.model;


export const models = createSelector(
  selectModelState,
);

