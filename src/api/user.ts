import req from '@/utils/request'

export const get_user_list = (data: any) => {
    return req({
        url: '/users',
        method: 'get',
        data
    })
}