import Vue from 'vue'
import Router from 'vue-router'
import LogIn from '@/components/LogIn'
import Kana from '@/components/other/Kana'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/other-kana',
      name: 'Kana',
      component: Kana
    }
  ]
})
