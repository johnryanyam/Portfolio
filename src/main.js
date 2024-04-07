// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import your router instance
import './styles/tailwind.css';
import './styles/main.css';

createApp(App).use(router).mount('#app');
