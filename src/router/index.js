import Vue from 'vue'
import Router from 'vue-router'
const Test = () => import('@/test/Test')

const Index = () => import('@/pages/Index')
const Index_Explore = () => import('@/pages/index/Explore')
const Index_Mine = () => import('@/pages/index/Mine')

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
