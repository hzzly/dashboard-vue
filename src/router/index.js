import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DashBoard from '@/components/DashBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/dashboard',
      name: 'DashBoard',
      component: DashBoard
    }
  ]
})
