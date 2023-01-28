import request from '@/utils/request'
import type { Result, ResultData, Page } from '@/utils/response'

export interface UserBaseInfo {
  id: number
  account: string
  username: string
  enabled: boolean
  role_id: number
  role_name: string
}

export interface UserInfo extends UserBaseInfo {
  is_admin: boolean
  // other info
}

// TODO: filter param
export const getUsers = (
  data: any
): Promise<ResultData<Page<UserBaseInfo>>> => {
  return request({
    url: '/users',
    method: 'get',
    data,
  })
}

export const getCurrentUserInfo = (): Promise<ResultData<UserInfo>> => {
  return request({
    url: '/user',
    method: 'get',
  })
}

export const getUserInfo = (id: number) => {
  return request({
    url: '/users/' + id,
    method: 'get',
  })
}

export const resetPassword = (id: number): Promise<Result> => {
  return request({
    url: '/users/' + id + '/password',
    method: 'post',
  })
}

export const disableUser = (id: number): Promise<Result> => {
  return request({
    url: '/users/' + id,
    method: 'post',
    data: { enable: 0 },
  })
}

export const enableUser = (id: number): Promise<Result> => {
  return request({
    url: '/users/' + id,
    method: 'post',
    data: { enable: 1 },
  })
}

export const update_user = (id: any, data: any) => {
  return request({
    url: '/users/' + id,
    method: 'post',
    data,
  })
}

export const create_user = (data: any) => {
  return request({
    url: '/users',
    method: 'post',
    data,
  })
}
