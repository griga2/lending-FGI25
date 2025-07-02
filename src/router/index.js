import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '../views/LayoutView/LayoutView.vue'
import MainView from '../views/MainView/MainView.vue'
import MobailMainView from '../views/MainView copy/MobileMainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'layout',
      component: LayoutView,
      children:[
        {
          path: '/main',
          name: 'main',
          component: MainView,
        },
        {
          path: '/mobail',
          name: 'mobail',
          component: MobailMainView,
        }
      ]
    },

  ]
})

export default router
