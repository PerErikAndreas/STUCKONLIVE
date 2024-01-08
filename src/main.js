import Vue from 'vue'
import App from './App'
import router from './router'

import Header from './components/Header'
import Main from './components/Main'

Vue.component("Header", Header)
Vue.component("Main", Main)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
