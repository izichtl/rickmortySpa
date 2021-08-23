import { createRouter, createWebHistory } from 'vue-router'
import Personagens from '../views/Personagens.vue'
import Episodios from '../views/Episodios.vue'

const routes = [
  {
    path: '/',
    name: 'Personangens',
    component: Personagens
  },
  {
    path: '/ep',
    name: 'Episodios',
    component: Episodios
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
