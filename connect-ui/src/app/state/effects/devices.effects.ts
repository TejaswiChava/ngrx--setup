import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  catchError,
  map,
  switchMap,
  takeUntil
} from 'rxjs/operators';

import { Device } from '../../models/devices.model';
import {DevicesService} from '../../services/devices/devices.service';
import { DeviceActions, DeviceActionTypes, DevicesLoadSuccess, DevicesLoadFailure } from '../actions/devices.actions';

@Injectable()
export class DeviceEffects {

  @Effect()
  loadDevices$: Observable<Action> = this.actions$.pipe(
    ofType(DeviceActionTypes.DevicesLoadAction),
    switchMap(() => {

      const onDevicesLoaded$ = this.actions$.pipe(
        ofType(DeviceActionTypes.DevicesLoadAction)
      );

      return this.devicesService.loadDevices().pipe(
        takeUntil(onDevicesLoaded$),
        map(
          (devices: Device[]) => new DevicesLoadSuccess(devices)
        ),
        catchError(error =>
          of(new DevicesLoadFailure(error))
        )
      );
    })
  );
  constructor(
    private actions$: Actions,
    private devicesService: DevicesService
  ) { }

}