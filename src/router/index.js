import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Mendefinisikan rute sesuai WDD 4.1
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/background',
      name: 'background',
      // Buat file ini nanti: src/views/BackgroundView.vue
      component: () => import('../views/BackgroundView.vue'),
    },
    {
      path: '/skills',
      name: 'skills',
      // Buat file ini nanti: src/views/SkillsView.vue
      component: () => import('../views/SkillsView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      // Buat file ini nanti: src/views/ProjectsView.vue
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/projects/:id',
      name: 'project-detail',
      // Buat file ini nanti: src/views/ProjectDetailView.vue
      component: () => import('../views/ProjectDetailView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      // Buat file ini nanti: src/views/ContactView.vue
      component: () => import('../views/ContactView.vue'),
    },
  ],
})

export default router
