import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsRoutingModule } from './operators-routing.module';
import { OperatorsComponent } from './containers/operators/operators.component';
import { UsersComponent } from './containers/users/users.component';

@NgModule({
  declarations: [OperatorsComponent, UsersComponent],
  imports: [
    CommonModule,
    OperatorsRoutingModule
  ]
})
export class OperatorsModule { }
