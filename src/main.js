import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import VueSocketIO from 'vue-socket.io'
import api from './assets/js/api.js'
import $global from './assets/js/global.js'
import Delay from './directive/Delay.js'
import ScrollIn from './directive/ScrollIn.js'
import 'animate.css/animate.min.css'
import './assets/css/index.scss'

/*Vue.use(new VueSocketIO({
  debug: true,
  connection: 'https://resumeback.herokuapp.com',  ////http://localhost:3000,https://resumeback.herokuapp.com
}))*/

Vue.prototype.$global=$global
Vue.prototype.$api=api
Vue.config.productionTip = false

new Vue({
  router,
  store,
  directives: {
    Delay,ScrollIn
  },
  render: h => h(App)
}).$mount('#app')
