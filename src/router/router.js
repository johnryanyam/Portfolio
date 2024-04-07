// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'; // Import your Home component
import About from '@/views/About.vue'; // Import your About component
import Skills from '@/views/Skills.vue'; // Import your Skills component
import Contact from '@/views/Contact.vue'; // Import your Contact component

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/skills', component: Skills },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
