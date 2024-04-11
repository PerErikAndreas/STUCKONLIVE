import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueCarousel from 'vue-carousel';

// Import components
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Footer from './components/Footer.vue';

// Create Vue application
const app = createApp(App);

// Use VueCarousel
app.use(VueCarousel);

// Register global components
app.component('Navbar', Navbar);
app.component('Hero', Hero);
app.component('Footer', Footer);

// Use router
app.use(router);

// Mount the app
app.mount('#app');
