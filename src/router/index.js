import { createRouter, createWebHistory } from 'vue-router'; // Updated import

const routes = [
  {
    path: '/',
    component: () => import('../templates/Default.vue'),
    children: [
      { path: '', component: () => import('../pages/HomePage') }, // Adjusted the home route
      { path: 'About', component: () => import('../pages/AboutPage') },
      { path: 'Contact', component: () => import('../pages/ContactPage') },
      { path: 'Scener', component: () => import('../pages/ScenerPage') },
      { path: 'PastShows', component: () => import('../pages/PastShows') }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
