import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/template/home/Home'
import AdminPages from '@/components/admin/AdminPages'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'adminPages',
    path: '/admin',
    component: AdminPages,
  // meta: { requiresAdmin: true }
}] 

export default new VueRouter({
    mode: 'history',
    routes:routes
})

 