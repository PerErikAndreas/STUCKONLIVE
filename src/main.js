import Vue from 'vue'
import App from './App'
import router from './router'

import Header from './components/Header'
import Footer from './components/Footer'
import HelloWorld from './components/HelloWorld'

Vue.component("Header", Header)
Vue.component("Footer", Footer)
Vue.component("HelloWorld", HelloWorld)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
