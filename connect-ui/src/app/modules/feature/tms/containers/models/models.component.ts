import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/models.model';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/reducers';
import { ModelsLoad } from 'src/app/state/actions/models.action';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {

  models: Array<Model> = [] ;
  models$ = this.appState.pipe(select((state: any) => state.models));
  columns = ["Model Name","Model Number", "Model Type", "Chipset", "DDR", "Flash", "Description"];
  columnData=["modelName","modelNo","modelType","chipSet","dDR","flash","description"];

  constructor(private appState: Store<AppState>) { }

  ngOnInit() {
    this.appState.dispatch(new ModelsLoad()); // Dispatching Device Load Action to update devices state
    this.models$.subscribe((state) => {
      if (state) {
        this.models = state.model; // Assigning devices state to @input project
      }
    });
  }

}
