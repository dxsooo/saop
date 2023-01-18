import request from '@/utils/request'
import type { ResultData } from '@/utils/response'

export const getUsers = (data: any) => {
  return request({
    url: '/users',
    method: 'get',
    data,
  })
}

export const getCurrentUserInfo = () => {
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

export const resetPassword = (id: number): Promise<ResultData> => {
  return request({
    url: '/users/' + id + '/password',
    method: 'post',
  })
}

export const disableUser = (id: number): Promise<ResultData> => {
  return request({
    url: '/users/' + id,
    method: 'post',
    data: { enable: 0 },
  })
}

export const enableUser = (id: number): Promise<ResultData> => {
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
