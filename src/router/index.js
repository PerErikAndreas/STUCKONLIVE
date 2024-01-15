import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../Pages/HomePage.vue';
import AboutPage from '../Pages/AboutPage.vue';
import ContactPage from '../Pages/ContactPage.vue';
import ScenerPage from '../Pages/ScenerPage.vue';
import PastShows from '../Pages/PastShows.vue';

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
