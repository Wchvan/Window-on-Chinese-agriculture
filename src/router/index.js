import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

import welcome from '@/views/welcome/welcome.vue'
const routes = [
  {
    path:'/',
    component:welcome,
    name:'welcome',
    meta:{
      hidden:true
    }
  },
  {
    path:'/home',
    name:'home',
    component:()=>import ('@/views/Home/home.vue')
  },
  {
    path:'/nation',
    name:'nation',
    component:()=>import ('@/views/Nation/nation.vue')
  },
  {
    path:'/sale',
    name:'sale',
    component:()=>import ('@/views/Sale/sale.vue')
  },
  {
    path:'/province',
    name:'province',
    component:()=>import ('@/views/Province/province.vue')
  },
  {
    path:'/history',
    name:'history',
    component:()=>import ('@/views/History/history.vue')
  },
  {
    path:'/info',
    name:'info',
    component:()=>import ('@/views/Info/info.vue')
  },
  {
    path:'/policy',
    name:'policy',
    component:()=>import ('@/views/Policy/policy.vue')
  }
]

const router = createRouter({
  history: process.env.IS_ELECTRON ? createWebHashHistory(process.env.BASE_URL) : createWebHistory(process.env.BASE_URL),
  routes
 })
export default router
