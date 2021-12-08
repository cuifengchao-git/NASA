import Vue from 'vue'
import Router from 'vue-router'
import LogIn from '@/components/LogIn'
import Kana from '@/components/other/Kana'
import Word from '@/components/other/Word'
import Home from '@/components/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/other-kana',
      name: 'Kana',
      component: Kana
    },
    {
      path: '/other-word',
      name: 'Word',
      component: Word
    }
  ]
})
