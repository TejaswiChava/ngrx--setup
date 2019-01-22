import { Model } from  '../../models/models.model';
import { ModelActions, ModelActionTypes} from '../actions/models.action';


export interface ModelState {
  model: Array<Model>;
  selectedModel: Model;
  isProcessing: boolean;
  error: null;
}

export interface Models {
  models: Array<Model>;
}

export const initialModelState: ModelState = {
  model: [],
  selectedModel: undefined,
  isProcessing: false,
  error: null
};

export function loadModelsReducer(state: ModelState = initialModelState,
  action: ModelActions) {
  switch (action.type) {
    case ModelActionTypes.ModelsLoadAction:
      return {
        ...state,
        isProcessing: true,
        error: null
      };
    case ModelActionTypes.ModelsLoadSuccess:
      return {
        ...state,
        model: action.payload,
        isProcessing: false,
        error: null,
        selectedDevice: undefined
      };
    case ModelActionTypes.ModelsLoadFailure:
      return {
        ...state,
        model: action.payload,
        isProcessing: false,
        error: action.payload
      };
  
    default:
      return state;
  }
}