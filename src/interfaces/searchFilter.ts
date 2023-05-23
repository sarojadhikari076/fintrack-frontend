export enum FieldName {
  Date = 'date',
  Q = 'q',
  Category = 'category',
  Sort = 'sort'
}

export type FilterQuery = {
  [K in FieldName]: string | number
}
