import { Device } from  '../../models/devices.model';
import { DeviceActions, DeviceActionTypes} from '../actions/devices.actions';


export interface DeviceState {
  device: Array<Device>;
  selectedDevice: Device;
  isProcessing: boolean;
  error: null;
}

export interface Devices {
  devices: Array<Device>;
}

export const initialDeviceState: DeviceState = {
  device: [],
  selectedDevice: undefined,
  isProcessing: false,
  error: null
};

export function loadDevicesReducer(state: DeviceState = initialDeviceState,
  action: DeviceActions) {
  switch (action.type) {
    case DeviceActionTypes.DevicesLoadAction:
      return {
        ...state,
        isProcessing: true,
        error: null
      };
    case DeviceActionTypes.DevicesLoadSuccess:
      return {
        ...state,
        device: action.payload,
        isProcessing: false,
        error: null,
        selectedDevice: undefined
      };
    case DeviceActionTypes.DevicesLoadFailure:
      return {
        ...state,
        device: action.payload,
        isProcessing: false,
        error: action.payload
      };
    case DeviceActionTypes.DeviceSelectedAction:
      return {
        ...state,
        selectedDevice: action.payload
      };
    default:
      return state;
  }
}