import { createSelector } from '@ngrx/store';


export const selectDeviceState = state => state.device;


export const devices = createSelector(
  selectDeviceState,
);

