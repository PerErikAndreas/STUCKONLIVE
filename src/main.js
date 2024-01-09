import Vue from 'vue'
import App from './App'
import router from './router'

import Header from './components/Header'
import Welcome from './components/Welcome'
import Footer from './components/Footer'
import VueCarousel from 'vue-carousel';
 
Vue.use(VueCarousel);
Vue.component("Header", Header)
Vue.component("Welcome", Welcome)
Vue.component("Footer", Footer)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
