// Composables
import { createRouter, createWebHistory } from 'vue-router'
import paths from './default'

const routes = [
  {
    path: '',
    component: () => import('@/layouts/default/Default.vue'),
    children: paths,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
