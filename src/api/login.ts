import req from '@/utils/request'

export const login = (data: any) => {
    return req({
        url: '/login',
        method: 'post',
        data
    })
}