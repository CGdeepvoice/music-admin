import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/main.css'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router: new Router(router),
  render: h => h(App)
})
