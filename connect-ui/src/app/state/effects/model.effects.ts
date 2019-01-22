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

import { Model } from  '../../models/models.model';
import { ModelActionTypes, ModelsLoadSuccess, ModelsLoadFailure } from '../actions/models.action';
import { ModelService } from 'src/app/services/models/model.service';

@Injectable()
export class ModelEffects {

  @Effect()
  loadModels$: Observable<Action> = this.actions$.pipe(
    ofType(ModelActionTypes.ModelsLoadAction),
    switchMap(() => {

      const onModelsLoaded$ = this.actions$.pipe(
        ofType(ModelActionTypes.ModelsLoadAction)
      );

      return this.modelService.loadModels().pipe(
        takeUntil(onModelsLoaded$),
        map(
          (models: Model[]) => new ModelsLoadSuccess(models)
        ),
        catchError(error =>
          of(new ModelsLoadFailure(error))
        )
      );
    })
  );
  constructor(
    private actions$: Actions,
    private modelService: ModelService
  ) { }

}