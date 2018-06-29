export interface TableConfig {
  columns: TableColumn[];
  operations: TableOperation[];
}

export interface TableColumn {
  name: string;
  prop: string;
  format?: string;
}

export interface TableOperation {
  id: string;
  name: string;
  icon: string;
}

export interface TableOperationEmit {
  operation: string;
  index: number;
}
