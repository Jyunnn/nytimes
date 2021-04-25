import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news/:id',
    name: 'News',
    component: () => import(/* webpackChunkName: "about" */ '../views/News.vue'),
    props: true,
    children: [
      {
        path: 'user',
        name: 'News-User',
        component: () => import('../views/User.vue')
      },
      {
        path: 'usercenter',
        name: 'News-Usercenter',
        component: () => import('../views/UserCenter.vue')
      }
    ]
  },
  {
    path: '/todolist',
    name: 'TodoList',
    component: () => import('../views/TodoList.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  next();
})

export default router
