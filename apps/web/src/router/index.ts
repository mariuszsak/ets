import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import firebase from 'firebase/compat'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/status',
    name: 'Status',
    component: () => import(/* webpackChunkName: "about" */ '../views/Status.vue')
  },
  {
    path: '/',
    name: 'MainForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/MainForm.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = firebase.auth().currentUser

  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})
export default router
