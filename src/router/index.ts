import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout.vue'
import { get_current_user_info } from '@/api/user';
import { ElNotification } from 'element-plus'
import { useUserStore } from '@/store/user';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/userManage',
    },
    {
      path: '/userManage',
      name: 'UserManage',
      component: Layout,
      children: [
        {
          path: '',
          name: 'ListUser',
          component: () => import('../views/UserManage/List.vue')
        },
        {
          path: 'create',
          name: 'CreateUser',
          component: () => import('../views/UserManage/Create.vue')
        },
        {
          path: 'edit/:id(\\d+)',
          name: 'EditUser',
          component: () => import('../views/UserManage/Edit.vue')
        },
        {
          path: '/supplier',
          name: 'supplier',
          component: () => import('../views/SupplierView.vue')
        },
        {
          path: '/project',
          name: 'project',
          component: () => import('../views/ProjectView.vue')
        },
        {
          path: '/task',
          name: 'task',
          component: () => import('../views/TaskView.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})


const checkLogin = () => {
  // 前端验证token有效性
  // 请求后端验证token有效性
  return window.sessionStorage.getItem('token');
}

// const checkEnabled = () => {
//   return window.sessionStorage.getItem('enable') == 'true';
// }

router.beforeEach(async (to, from) => {
  if (
    // 检查用户是否已登录
    !checkLogin() &&
    // 避免无限重定向
    to.name !== 'Login'
  ) {
    // 将用户重定向到登录页面
    return { name: 'Login' }
  }

  if (to.name !== 'Login') {
    // 每次路由变更检查帐号有效性
    console.log('change router')
    let res = await get_current_user_info()
    if (res.data.data.enable == false) {
      ElNotification({
        title: '操作失败',
        message: '帐号已禁用',
        type: 'error',
      })
      router.push({ name: 'Login' });
    }
    // 更新到store
    const store = useUserStore()
    store.id = res.data.data.id
    store.username = res.data.data.username
    store.role_name = res.data.data.role_name
    store.role_id = res.data.data.role_id
    store.is_admin = res.data.data.is_admin

    if (to.name == 'Home') {
      // 标注审核员首页是 task
      if (store.role_id >= 4) {
        router.push('/taskManage');
      }
    }
  }
})

export default router
