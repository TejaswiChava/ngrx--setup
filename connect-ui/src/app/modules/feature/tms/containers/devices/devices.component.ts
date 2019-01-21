import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/devices.model';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/reducers';
import { DeviceLoad } from 'src/app/state/actions/devices.actions';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  columns = ["Box Id","Chip Id", "Card Id", "Model", "CAS", "Factory", "Operator", "Status", "Connected"];
  columnData=["boxId","chipId","cardId",{name: "model",value: "modelName"},{name: "cas", value: "casName"},{name: "factory",value:"name"},{name:"operator",value:"name"},"status","connectedStatus"];
  devices: Array<Device> = [];
  devices$ = this.appState.pipe(select((state: any) => state.devices));


  constructor(private appState: Store<AppState>) {}

  ngOnInit() {
    this.appState.dispatch(new DeviceLoad()); // Dispatching Project Load Action to update projects state
    this.devices$.subscribe((state) => {
      if (state) {
        this.devices = state.device; // Assigning projects state to @input project
        console.log(this.devices);
      }
    });
  }


}
