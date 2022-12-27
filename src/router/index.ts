import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/userManage',
    },
    {
      path: '/userManage',
      name: 'userManage',
      component: Layout,
      children: [
        {
          path: '',
          name: 'ListUser',
          component: () => import('../views/UserManage/list.vue')
        },
        {
          path: 'create',
          name: 'CreateUser',
          component: () => import('../views/UserManage/create.vue')
        },
        {
          path: 'edit/:id(\\d+)',
          name: 'EditUser',
          component: () => import('../views/UserManage/edit.vue')
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
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router
