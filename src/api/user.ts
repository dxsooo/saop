import req from '@/utils/request'

export const get_user_list = (data: any) => {
    return req({
        url: '/users',
        method: 'get',
        data
    })
}

export const get_current_user_info = () => {
    return req({
        url: '/user',
        method: 'get',
    })
}

export const get_user_info = (data: any) => {
    return req({
        url: '/users/:id',
        method: 'get',
        data
    })
}