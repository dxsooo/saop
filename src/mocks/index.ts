import Mock from 'mockjs'

Mock.setup({
  timeout: '200-500',
})

Mock.mock('/api/login', {
  code: 0,
  message: 'ok',
  data: {
    token: '123123123555',
  },
})

// Mock.mock('/api/login', {
//   code: 1000,
//   message: '用户不存在',
// })

// Mock.mock('/api/login', {
//     code: 10,
//     message: '密码错误'
// })

// Mock.mock('/api/user', 'get', {
//     code: 0,
//     message: 'ok',
//     data:
//         { id: 1, username: 'admin', is_admin: true }
// })

Mock.mock('/api/user', 'get', {
  code: 0,
  message: 'ok',
  data: {
    id: 1,
    account: 'John',
    username: 'John',
    enabled: true,
    role_name: '管理员',
    is_admin: true,
  },
})

// Mock.mock('/api/user', 'get', {
//     code: 0,
//     message: 'ok',
//     data:
//         { id: 2, username: 'Lucy', enable: true, role_name: '系统运营', role_id: 1, is_admin: false }
// })

// Mock.mock('/api/user', 'get', {
//     code: 0,
//     message: 'ok',
//     data:
//         { id: 1, username: 'John', enable: false, role_name: '系统运营', role_id: 1, is_admin: false }
// })

// Mock.mock('/api/user', 'get', {
//     code: 0,
//     message: 'ok',
//     data:
//         { id: 1, username: 'John', enable: true, role_name: '系统运营', role_id: 4, is_admin: false }
// })

Mock.mock('/api/users/:id', 'GET', {
  code: 0,
  message: 'ok',
  data: {
    id: 1,
    username: 'John',
    enabled: true,
    role_name: '系统运营',
    role_id: 1,
  },
})

Mock.mock('/api/users', 'get', {
  code: 0,
  message: 'ok',
  data: {
    total: 10,
    offset: 0,
    items: [
      {
        id: 1,
        account: 'John',
        username: 'John',
        enabled: true,
        role_name: '系统运营',
        role_id: 1,
      },
      {
        id: 2,
        account: 'Tom',
        username: 'Tom',
        enabled: true,
        role_name: '标注员',
        role_id: 5,
      },
      {
        id: 3,
        account: 'Mary',
        username: 'Mary',
        enabled: false,
        role_name: '审核员',
        role_id: 4,
      },
      {
        id: 4,
        account: 'Lucy',
        username: 'Lucy',
        enabled: false,
        role_name: '供应商运营',
        role_id: 3,
      },
      {
        id: 5,
        account: 'Chris',
        username: 'Chris',
        enabled: false,
        role_name: '业务运营',
        role_id: 2,
      },
    ],
  },
})

Mock.mock('/api/users', 'post', {
  code: 0,
  message: 'ok',
  data: {
    id: 100,
    username: 'John100',
    enable: true,
    role_name: '系统运营',
    role_id: 1,
  },
})

Mock.mock(/\/api\/users\/\d+$/, 'post', {
  code: 0,
  message: 'ok',
})

Mock.mock(/\/api\/users\/\d+\/password/, 'post', {
  code: 0,
  message: 'ok',
})

Mock.mock('/api/suppliers', {
  code: 0,
  message: 'ok',
  data: {
    items: [
      {
        id: 1,
        name: 'John home',
        creator: {
          id: 1,
          name: 'John',
        },
        ops: [
          {
            id: 4,
            name: 'Lucy',
          },
        ],
        business_ops: [
          {
            id: 1,
            name: 'John',
          },
        ],
        member_cnt: 2,
      },
      {
        id: 2,
        name: 'Tom family',
        creator: {
          id: 5,
          name: 'Chris',
        },
        ops: [
          {
            id: 4,
            name: 'Lucy',
          },
        ],
        business_ops: [],
        member_cnt: 10,
      },
    ],
  },
})
