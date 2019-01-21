import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoftwareImagesComponent } from './containers/software-images/software-images.component';
import { OtaUpgradeComponent } from './containers/ota-upgrade/ota-upgrade.component';

const routes: Routes = [
  { path: 'softwareImages', pathMatch: 'full', component: SoftwareImagesComponent },
  { path: 'otaUpgrade', pathMatch: 'full', component: OtaUpgradeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtaRoutingModule { }
