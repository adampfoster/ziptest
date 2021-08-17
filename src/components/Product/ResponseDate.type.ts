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

export interface MetaData {
  pageSize: number
  total: number
  response_type: string
}

export interface ResponseData {
  aggregations: Aggregations
  meta: MetaData
}
