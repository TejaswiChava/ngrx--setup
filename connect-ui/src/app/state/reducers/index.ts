import { ActionReducerMap, MetaReducer, combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import {loadAuthReducer,authState} from './auth.reducers';

import {environment} from '../../../environments/environment';
import { DeviceState, loadDevicesReducer } from './devices.reducers';
import { loadModelsReducer, ModelState } from './models.reducers';

export interface AppState {
  auth: authState;
  devices: DeviceState;
  models: ModelState;
}

export default combineReducers({
  loadAuthReducer,
  loadDevicesReducer,
  loadModelsReducer
});

export const reducers: ActionReducerMap<AppState> = {
  auth: loadAuthReducer,
  devices: loadDevicesReducer,
  models: loadModelsReducer
};

export const metaReducers: MetaReducer<AppState>[] =
!environment.production ? [storeFreeze] : [];