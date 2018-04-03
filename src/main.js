// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 初始化CSS，一定要在最上面引入
import './assets/normalize.less'
//引入Flexible
import 'lib-flexible'
import vueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(vueResource)
// 设置全局header
Vue.http.headers.common['authorization'] = `${localStorage.token}`

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
