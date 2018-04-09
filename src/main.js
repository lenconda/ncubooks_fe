// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 初始化CSS，一定要在最上面引入
import './assets/normalize.less'
// 引入图标主题
import 'font-awesome/css/font-awesome.min.css'
import './assets/ncubooks-icon.css'
import vueResource from 'vue-resource'
import 'mint-ui/lib/style.min.css'
// 引入非服务类组件
import { Button } from 'mint-ui'
// 自定义CSS，这个一定要在最后引入
import './assets/custom.less'
// 引入Flexible.css
import './assets/flexible.css'

// 全局引入服务类组件
import { Toast, Indicator, MessageBox } from 'mint-ui'
// 全局注册服务类组件
Vue.prototype.$toast = Toast
Vue.prototype.$indicator = Indicator
Vue.prototype.$messagebox = MessageBox
// 注册非服务类组件
Vue.component(Button.name, Button)
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
