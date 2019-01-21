import { Component, OnInit, Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() displayedColumns;
  @Input() data;
  @Input() defColumns;
  constructor() { }

  ngOnInit() {
  }

  isObj(val) {
    return typeof val === 'object';
  }

  isStr(val) {
    return typeof val === 'string';
  }
  getUnitCountCellColor(device){
    
  }


}
