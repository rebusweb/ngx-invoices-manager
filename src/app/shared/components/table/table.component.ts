import { Component, OnInit, Input } from '@angular/core';
import { TableConfig } from '../../models/table-config';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {
  @Input() data: any;
  @Input() config: TableConfig;
  displayedColumns: string[];

  constructor() { }

  ngOnInit() {
    this.displayedColumns = this.config.columns.map((item) => item.prop);
    if (this.config.operations) {
      this.displayedColumns.push('operations');
    }
  }

  getDataValue(data: any, prop: string) {
    if (prop.includes('.')) {
      const propArray = prop.split('.');
      let value = { ...data };
      propArray.forEach(element => {
        value = value[element];
      });
      return value;
    }
    return data[prop];
  }

}
