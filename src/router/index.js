import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/test/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/test'/*以后要移除这个跳转*/
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
