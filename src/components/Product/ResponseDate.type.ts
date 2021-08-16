export interface Aggregations {
  brands?: any
  categories?: any
  colors?: any
  countries?: any
  max_price: number
  offers?: any
  payments?: any
  retailers?: any
  sales?: any
}

export interface Meta {
  pageSize: number
  total: number
  aggregations: Aggregations
}

export interface ResponseData {
  meta: Meta
}
