import Vue from 'vue'
import VueRouter from 'vue-router'
import Company from '@/views/Company/index.vue'
import Exercise from '@/views/Exercise/index.vue'
import Find from '@/views/Find/index.vue'
import My from '@/views/My/index.vue'
import CompanyDetail from '@/views/CompanyDetail/index.vue'
import Login from '@/views/Login/index.vue'
import User from '@/views/UserDetail/index.vue'
import DataChange from '@/components/DataChange.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Company'
  },
  {
    path: '/DataChange',
    name: 'DataChange',
    component: DataChange
  },

  {
    path: '/User',
    component: User
  },
  {
    path: '/CompanyDetail',
    component: CompanyDetail
  },
  {
    path: '/Company',
    component: Company,
    meta: { showtabbar: true }
  },
  {
    path: '/Exercise',
    component: Exercise,
    meta: { showtabbar: true }
  },
  {
    path: '/Find',
    component: Find,
    meta: { showtabbar: true }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/My',
    component: My,
    meta: { showtabbar: true }
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  console.log('to', to)
  console.log('from', from)
  next()
})

export default router
