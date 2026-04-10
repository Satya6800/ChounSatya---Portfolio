import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Portfolio from '@/views/Portfolio.vue'
import Services from '@/views/Services.vue'
import Skills from '@/views/Skills.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      { path: '/', component: Home },
      { path: '/about', component: About },
      { path: '/portfolio', component: Portfolio },
      { path: '/services', component: Services },
      { path: '/skills', component: Skills },
      { path: '/contact', component: Contact },
  ],
})

export default router
