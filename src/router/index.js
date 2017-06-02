import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/list',
      name: 'list',
      component: require('../views/list/list')
    },
    {
      path: '/slider',
      name: 'slider',
      component: require('../views/slider/sliderTest')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: require('../components/calendar/trainCalendarView')

   }
  ]
})
