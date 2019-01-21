import { Action } from '@ngrx/store';
import { Device } from  '../../models/devices.model';

export enum DeviceActionTypes {

  DeviceSelectedAction   = '[Device Selected] Action',
  DevicesLoadAction       = '[Device Load] Action',
  DevicesLoadSuccess     = '[Device Load Success] Action',
  DevicesLoadFailure     = '[Device Load Failure] Action'
}


export class  DeviceSelectedAction implements Action {

  readonly type = DeviceActionTypes.DeviceSelectedAction;

  constructor(public payload: Device) {

  }
}
export class  DevicesLoadFailure implements Action {

  readonly type = DeviceActionTypes.DevicesLoadFailure;

  constructor(public payload: null) {

  }
}

export class  DevicesLoadSuccess implements Action {

  readonly type = DeviceActionTypes.DevicesLoadSuccess;

  constructor(public payload: Device []) {

  }
}

export class DeviceLoad implements Action {
  readonly type = DeviceActionTypes.DevicesLoadAction;

}

export type DeviceActions =  DeviceSelectedAction |
                              DeviceLoad |
                              DevicesLoadSuccess |
                              DevicesLoadFailure;