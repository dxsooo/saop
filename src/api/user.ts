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

export const reset_password = (id: any) => {
    return req({
        url: '/users/' + id + '/password',
        method: 'post',
    })
}

export const disable_user = (id: any) => {
    return req({
        url: '/users/' + id,
        method: 'post',
        data: { "enable": 0 },
    })
}

export const enable_user = (id: any) => {
    return req({
        url: '/users/' + id,
        method: 'post',
        data: { "enable": 1 },
    })
}

export const update_user = (id: any, data: any) => {
    return req({
        url: '/users/' + id,
        method: 'post',
        data,
    })
}

export const create_user = (data: any) => {
    return req({
        url: '/users',
        method: 'post',
        data
    })
}
