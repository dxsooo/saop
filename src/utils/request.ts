// 参考：https://www.cnblogs.com/Jishuyang/p/16700801.html

import Axios from 'axios';

const req = Axios.create({
    // baseURL:'http://localhost:3000' // 跨域
    baseURL: '/api' // 实例独特的表示，走代理解决跨域
});
// 拦截器 = 公共行为: 请求loading 响应关闭loading
// 响应的错误常规处理 401 => 无权访问, 路由跳转到401页面
// 请求时 如果有token， 自动添加到请求头，响应时自动存储token 
req.interceptors.response.use((response: any) => {
    // response:{ data,config:{ headers }  }
    if (response.data.data.token) {
        // 保存到本地存储: sessionStorage, localStorage
        sessionStorage.setItem('token', response.data.data.token)
    }
    // 处理响应的业务异常
    return response;
}, (err: any) => {
    // 4xx 5xx异常
    // 非业务范畴的通用异常提示
    console.log('响应异常:', err)
})
// 请求使用token
req.interceptors.request.use((config: any) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        config.headers.token = token;
    }
    return config;
});
export default req;
