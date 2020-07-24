import Vue from 'vue'
import VueRouter from 'vue-router'
import Company from '@/views/Company/index.vue'
import Exercise from '@/views/Exercise/index.vue'
import Find from '@/views/Find/index.vue'
import My from '@/views/My/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Company'
  },
  {
    path: '/Company',
    component: Company
  },
  {
    path: '/Exercise',
    component: Exercise
  },
  {
    path: '/Find',
    component: Find
  },
  {
    path: '/My',
    component: My
  }
]

const router = new VueRouter({
  routes
})

export default router
