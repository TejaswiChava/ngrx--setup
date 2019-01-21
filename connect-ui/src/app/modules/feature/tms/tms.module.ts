import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TmsRoutingModule } from './tms-routing.module';
import { DevicesComponent } from './containers/devices/devices.component';
import { ModelsComponent } from './containers/models/models.component';
import { FeaturesComponent } from './containers/features/features.component';
import { FactoriesComponent } from './containers/factories/factories.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DevicesComponent, ModelsComponent, FeaturesComponent, FactoriesComponent],
  imports: [
    CommonModule,
    TmsRoutingModule,
    SharedModule
  ]
})
export class TmsModule { }
