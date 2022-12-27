import Mock from 'mockjs'

Mock.setup({
    timeout: '200-500'
})

Mock.mock('/api/login', {
    code: 0,
    message: 'ok',
    data: {
        token: '123123123'
    }
})

// Mock.mock('/api/user', 'get', {
//     code: 0,
//     message: 'ok',
//     data:
//         { id: 1, username: 'admin', is_admin: true }
// })

Mock.mock('/api/user', 'get', {
    code: 0,
    message: 'ok',
    data:
        { id: 1, username: 'John', enable: true, role_name: '系统运营', role_id: 1, is_admin: false }
})

// Mock.mock('/api/user', 'get', {
//     code: 0,
//     message: 'ok',
//     data:
//         { id: 1, username: 'John', enable: true, role_name: '系统运营', role_id: 4, is_admin: false }
// })

Mock.mock('/api/users/:id', 'GET', {
    code: 0,
    message: 'ok',
    data:
        { id: 1, username: 'John', enable: true, role_name: '系统运营', role_id: 1 }
})

Mock.mock('/api/users', {
    code: 0,
    message: 'ok',
    data: {
        items: [
            { id: 1, username: 'John', enable: true, role_name: '系统运营', role_id: 1 },
            { id: 2, username: 'Tom', enable: true, role_name: '标注员', role_id: 5 },
            { id: 3, username: 'Mary', enable: false, role_name: '审核员', role_id: 4 },
            { id: 4, username: 'Lucy', enable: false, role_name: '供应商运营', role_id: 3 },
            { id: 5, username: 'Chris', enable: false, role_name: '业务运营', role_id: 2 }
        ]
    }
})

Mock.mock('/api/suppliers', {
    code: 0,
    message: 'ok',
    data: {
        items: [
            {
                id: 1, name: 'John home', creator: {
                    id: 1, name: 'John'
                }, ops: [{
                    id: 4, name: 'Lucy'
                }], business_ops: [{
                    id: 1, name: 'John'
                }], member_cnt: 2
            },
            {
                id: 2, name: 'Tom family', creator: {
                    id: 5, name: 'Chris'
                }, ops: [{
                    id: 4, name: 'Lucy'
                }], business_ops: [], member_cnt: 10
            },
        ]
    }
})