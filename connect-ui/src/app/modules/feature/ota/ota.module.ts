import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtaRoutingModule } from './ota-routing.module';
import { SoftwareImagesComponent } from './containers/software-images/software-images.component';
import { OtaUpgradeComponent } from './containers/ota-upgrade/ota-upgrade.component';

@NgModule({
  declarations: [SoftwareImagesComponent, OtaUpgradeComponent],
  imports: [
    CommonModule,
    OtaRoutingModule
  ]
})
export class OtaModule { }
