import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorsComponent } from './containers/operators/operators.component';
import { UsersComponent } from './containers/users/users.component';

const routes: Routes = [
  { path: 'operators', pathMatch: 'full', component: OperatorsComponent },
  { path: 'users', pathMatch: 'full', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsRoutingModule { }
