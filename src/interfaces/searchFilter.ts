export enum FieldName {
  Date = 'date',
  Q = 'q',
  Category = 'category'
}

export type FilterQuery = {
  [K in FieldName]: string | number
}
