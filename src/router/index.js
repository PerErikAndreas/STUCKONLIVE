import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import ContactPage from '../pages/ContactPage.vue';
import ScenerPage from '../pages/ScenerPage.vue';
import PastShows from '../pages/PastShows.vue';

const routes = [
  {
    path: '/',
    component: () => import('../templates/Default.vue'),
    children: [
      { path: '', component: HomePage },
      { path: 'About', component: AboutPage },
      { path: 'Contact', component: ContactPage },
      { path: 'Scener', component: ScenerPage },
      { path: 'PastShows', component: PastShows }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
