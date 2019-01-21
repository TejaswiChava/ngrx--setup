import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'ng2-data-table';
import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from './module/material/material.module';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    DataTableModule

  ],
  exports: [
    MaterialModule,
    TableComponent
  ]
})
export class SharedModule { }
