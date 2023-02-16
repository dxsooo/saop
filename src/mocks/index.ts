export default [
  {
    url: '/api/login',
    method: 'post',
    response: {
      code: 0,
      message: 'ok',
      data: {
        token: '123123123555',
      },
    },
  },
  {
    url: '/api/user',
    method: 'get',
    response: {
      code: 0,
      message: 'ok',
      data: {
        id: 1,
        account: 'John',
        username: 'John',
        enabled: true,
        is_admin: true,
      },
    },
  },
  {
    url: '/api/users',
    method: 'get',
    response: {
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
    },
  },
  {
    url: '/api/users',
    method: 'post',
    response: {
      code: 0,
      message: 'ok',
      data: {
        id: 100,
        username: 'John100',
        enable: true,
        role_name: '系统运营',
        role_id: 1,
      },
    },
  },
  {
    url: /\/api\/users\/\d+\/password/,
    method: 'post',
    response: {
      code: 0,
      message: 'ok',
    },
  },
  {
    url: /\/api\/users\/\d+$/,
    method: 'post',
    response: {
      code: 0,
      message: 'ok',
    },
  },
]
