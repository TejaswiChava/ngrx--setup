import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { reducers, metaReducers } from '../../state/reducers';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreRoutingModule } from './core-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from 'src/app/state/effects/auth.effects';
import { DeviceEffects } from 'src/app/state/effects/devices.effects';
// import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AuthEffects,DeviceEffects]),
  ],
  
  exports: [
    SidebarComponent, HeaderComponent
  ],
  providers: [
    
  ]
})
export class CoreModule { }
