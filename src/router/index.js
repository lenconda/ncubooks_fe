import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/test/Test'

import Index from '@/pages/Index'
import Index_Explore from '@/pages/index/Explore'
import Index_Mine from '@/pages/index/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'portal',
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: 'explore',
          name: 'explore',
          component: Index_Explore
        },
        {
          path: 'mine',
          name: 'mine',
          component: Index_Mine
        }
      ]
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
