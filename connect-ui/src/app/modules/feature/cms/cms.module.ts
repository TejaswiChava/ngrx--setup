import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { ChannelsComponent } from './containers/channels/channels.component';
import { OperatorChannelsComponent } from './containers/operator-channels/operator-channels.component';
import { EpgComponent } from './containers/epg/epg.component';

@NgModule({
  declarations: [ChannelsComponent, OperatorChannelsComponent, EpgComponent],
  imports: [
    CommonModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
