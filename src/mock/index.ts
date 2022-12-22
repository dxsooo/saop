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

Mock.mock('/api/users', {
    code: 0,
    message: 'ok',
    data: {
        items: [
            { id: 1, username: 'John', enable: true, role_name: '系统运营', role_id: 1 },
            { id: 2, username: 'Tom', enable: true, role_name: '标注员', role_id: 5 },
            { id: 3, username: 'Mary', enable: false, role_name: '审核员', role_id: 4 }
        ]
    }
})