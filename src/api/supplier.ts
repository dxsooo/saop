import req from '@/utils/request'

export const get_supplier_list = (data: any) => {
    return req({
        url: '/suppliers',
        method: 'get',
        data
    })
}