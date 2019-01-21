import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { AuthService } from 'src/app/services/auth/auth.service';

const appRoutes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login', loadChildren: '../login/login.module#LoginModule'
  },
  {
    path: 'dashboard', loadChildren: '../feature/dashboard/dashboard.module#DashboardModule', canActivate: [ AuthService ]
  },
  {
    path: 'tms', loadChildren: '../feature/tms/tms.module#TmsModule',canActivate: [ AuthService ]
  },
  {
    path: 'operators', loadChildren: '../feature/operators/operators.module#OperatorsModule',canActivate: [ AuthService ]
  },
  {
    path: 'ota', loadChildren: '../feature/ota/ota.module#OtaModule',canActivate: [ AuthService ]
  },
  {
    path: 'advertising', loadChildren: '../feature/advertising/advertising.module#AdvertisingModule',canActivate: [ AuthService ]
  },
  {
    path: 'cms', loadChildren: '../feature/cms/cms.module#CmsModule',canActivate: [ AuthService ]
  },
  {
      path: '**',
      component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
