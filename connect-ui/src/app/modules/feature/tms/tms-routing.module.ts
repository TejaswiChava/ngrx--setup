import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './containers/devices/devices.component';
import { ModelsComponent } from './containers/models/models.component';
import { FeaturesComponent } from './containers/features/features.component';
import { FactoriesComponent } from './containers/factories/factories.component';

const routes: Routes = [
  { path: 'devices', pathMatch: 'full', component: DevicesComponent },
  { path: 'models', pathMatch: 'full', component: ModelsComponent },
  { path: 'features', pathMatch: 'full', component: FeaturesComponent },
  { path: 'factories', pathMatch: 'full', component: FactoriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TmsRoutingModule { }
