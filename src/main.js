import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Create Vue application
const app = createApp(App);

// Use router
app.use(router);

// Register global components
app.component('Navbar', () => import('./components/Navbar.vue'));

// Mount the app
app.mount('#app');
