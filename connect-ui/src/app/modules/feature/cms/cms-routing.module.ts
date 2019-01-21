import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorChannelsComponent } from './containers/operator-channels/operator-channels.component';
import { ChannelsComponent } from './containers/channels/channels.component';
import { EpgComponent } from './containers/epg/epg.component';

const routes: Routes = [
  { path: 'channels', pathMatch: 'full', component: ChannelsComponent },
  { path: 'operatorChannels', pathMatch: 'full', component: OperatorChannelsComponent },
  { path: 'epg', pathMatch: 'full', component: EpgComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
