import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $global from './assets/js/global.js'
import './assets/css/index.scss'
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000',
}))

Vue.prototype.$global=$global 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
