import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function route (path, component) {
  return {
    path,
    name: path,
    component: () => import(`@/pages/${component}`)
  }
}

const Layout = () => import('@/templates/Default')

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        route('/', 'Home'),
        route('/about', 'About'), // Add an 'About' page
        route('/contact', 'Contact') // Add a 'Contact' page
      ]
    }
  ],
  path: '*', redirect: '/'
})

export default router
