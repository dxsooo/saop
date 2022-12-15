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