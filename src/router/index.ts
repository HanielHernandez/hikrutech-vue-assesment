import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/jobs',
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: () => import('../views/JobsView.vue'),
    },
    {
      path: '/jobs/:id',
      name: 'Job Details',
      component: () => import('../views/JobDetailsView.vue'),
    },
  ],
})

export default router
