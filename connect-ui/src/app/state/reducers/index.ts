import { ActionReducerMap, MetaReducer, combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import {loadAuthReducer,authState} from './auth.reducers';

import {environment} from '../../../environments/environment';
import { DeviceState, loadDevicesReducer } from './devices.reducers';

export interface AppState {
  auth: authState;
  devices: DeviceState
}

export default combineReducers({
  loadAuthReducer,
  loadDevicesReducer
});

export const reducers: ActionReducerMap<AppState> = {
  auth: loadAuthReducer,
  devices: loadDevicesReducer
};

export const metaReducers: MetaReducer<AppState>[] =
!environment.production ? [storeFreeze] : [];