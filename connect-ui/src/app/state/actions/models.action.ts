import { Action } from '@ngrx/store';
import { Model } from '../../models/models.model';


export enum ModelActionTypes  {
  ModelsLoadAction       = '[Model Load] Action',
  ModelsLoadSuccess     = '[Model Load Success] Action',
  ModelsLoadFailure     = '[Model Load Failure] Action'
}

export class  ModelsLoadFailure implements Action {

  readonly type = ModelActionTypes.ModelsLoadFailure;

  constructor(public payload: null) {

  }
}

export class  ModelsLoadSuccess implements Action {

  readonly type = ModelActionTypes.ModelsLoadSuccess;

  constructor(public payload: Model []) {

  }
}

export class ModelsLoad implements Action {
  readonly type = ModelActionTypes.ModelsLoadAction;

}

export type ModelActions =   ModelsLoad |
                              ModelsLoadSuccess |
                              ModelsLoadFailure;