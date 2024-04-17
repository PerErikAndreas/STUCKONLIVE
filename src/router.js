import { createRouter, createWebHistory } from 'vue-router';

// Lazy load the components for each route
const route = (path, component) => {
  return {
    path,
    name: path,
    component: () => import(`../src/pages/${component}.vue`)
  }
}

const Layout = () => import('../src/templates/Default.vue'); // Ensure this path is correct

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// start with the basics.
const router = createRouter({
  // Use createWebHistory for HTML5 history mode
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        route('/', 'Home'),
        route('/om-oss', 'Om-oss'), // Corrected the comment to match the route
        route('/kontakt', 'Kontakt'),
      ]
    },
    { path: '/:pathMatch(.*)*', redirect: '/' } // Handle all other paths
  ],
})

export default router;
