import { createRouter, createWebHistory } from 'vue-router'
import modal from '../components/ErrorDialog.vue'

const routes = [
  { path: '/', component: modal },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router