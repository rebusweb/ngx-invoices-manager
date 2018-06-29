export interface TableConfig {
  columns: TableColumn[];
  operations: {
    edit: boolean,
    copy: boolean,
    delete: boolean,
  };
}

export interface TableColumn {
  name: string;
  prop: string;
  format?: string;
}
