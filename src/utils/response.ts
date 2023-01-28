export interface Result {
  code: number
  message: string
}

export interface ResultData<T = any> extends Result {
  data?: T
}

export interface Page<T = any> {
  items: T[]
  total: number
  offset: number
}
