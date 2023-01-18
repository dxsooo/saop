import request from '@/utils/request'
import type { ResultData } from '@/utils/response'

export interface LoginParam {
  account: string
  password: string
}

export interface LoginRes {
  token: string
}

export const login = (data: LoginParam): Promise<ResultData<LoginRes>> => {
  return request({
    url: '/login',
    method: 'post',
    data,
  })
}
