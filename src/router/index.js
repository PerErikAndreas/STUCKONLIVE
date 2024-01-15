import { createRouter, createWebHistory } from 'vue-router'; // Updated import

const routes = [
  {
    path: '/',
    component: () => import('../templates/Default.vue'),
    children: [
      { path: '', component: () => import('@/pages/HomePage.vue') },
      { path: 'About', component: () => import('@/pages/AboutPage.vue') },
      { path: 'Contact', component: () => import('@/pages/ContactPage.vue') },
      { path: 'Scener', component: () => import('@/pages/ScenerPage.vue') },
      { path: 'PastShows', component: () => import('@/pages/PastShows.vue') }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
