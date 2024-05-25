import { createWebHistory, createRouter } from 'vue-router'

import BikinView from './views/BikinView.vue'
import HomeView from './views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/bikin', component: BikinView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
