import { createRouter, createWebHistory } from 'vue-router';

// Lazy load the components for each route
const route = (path, component) => {
  return {
    path,
    name: path,
    component: () => import(`../src/pages/${component}.vue`) // Ensure this path is correct
  };
};

const Layout = () => import('../src/templates/Default.vue'); // Ensure this path is correct

// Create the router instance and pass the `routes` option
const router = createRouter({
  // Use createWebHistory for HTML5 history mode
  history: createWebHistory(process.env.BASE_URL || '/'),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        route('/', 'HomePage'),
        route('/Kontakt', 'ContactPage'),
        route('/Cookie-Policy', 'CookiePolicy'),
        route('/Privacy-Policy', 'PrivacyPolicy'),
      ]
    },
    { path: '/:pathMatch(.*)*', redirect: '/' } // Handle all other paths
  ]
});

export default router;
