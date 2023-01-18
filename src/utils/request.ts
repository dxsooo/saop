// 参考：https://www.cnblogs.com/Jishuyang/p/16700801.html

import Axios from 'axios'

const request = Axios.create({
  // baseURL:'http://localhost:3000' // 跨域
  baseURL: '/api', // 实例独特的表示，走代理解决跨域
})
// 拦截器 = 公共行为: 请求loading 响应关闭loading
// 响应的错误常规处理 401 => 无权访问, 路由跳转到401页面
// 请求时 如果有token， 自动添加到请求头，响应时自动存储token
request.interceptors.response.use(
  (response: any) => {
    // response:{ data,config:{ headers }  }
    // if (response.data.data) {
    //     if (response.data.data.token) {
    //         // 保存到本地存储: sessionStorage, localStorage
    //         sessionStorage.setItem('token', response.data.data.token)
    //     }
    //     // todo: 按照请求确定？
    //     if (response.data.data.enable !== undefined && response.data.data.is_admin !== undefined && response.data.data.role_id !== undefined) {
    //         // 保存到本地存储: sessionStorage, localStorage
    //         sessionStorage.setItem('is_admin', response.data.data.is_admin)
    //         sessionStorage.setItem('enable', response.data.data.enable)
    //         sessionStorage.setItem('role_id', response.data.data.role_id)
    //     }
    // }
    // 不处理响应的业务异常，由发起请求的页面处理
    return response.data
  },
  (err: any) => {
    // 4xx 5xx异常
    // 非业务范畴的通用异常提示
    console.log('响应异常:', err)
  }
)
// 请求使用token
request.interceptors.request.use((config: any) => {
  const token = sessionStorage.getItem('token')
  if (token) {
    config.headers.token = token
  }
  return config
})
export default request
