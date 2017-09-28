import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'
import Home from '@/views/Home'
import NotFound from '@/views/404.vue'
const cale = r => require.ensure([], () => r(require('@/views/fullcalendar/fullcalendar.vue')), 'cale')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/404',
      component: NotFound,
      name: '',
      hidden: true
    },
    {
      path: '/cale',
      component: cale,
      name: '管理系统'
    },
    {
      path: '*',
      hidden: true,
      redirect: { path: '/404' }
    }
  ]
})
