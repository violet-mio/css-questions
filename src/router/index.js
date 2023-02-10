import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'way' },
      children: [
        {
          path: '/height-question/way',
          name: 'way',
          component: () => import('../views/height-question/Way.vue'),
        },
        {
          path: '/height-question/way2',
          name: 'way2',
          component: () => import('../views/height-question/Way2.vue')
        },
        {
          path: '/height-question/way3',
          name: 'way3',
          component: () => import('../views/height-question/Way3.vue')
        },
        {
          path: '/height-question/way4',
          name: 'way4',
          component: () => import('../views/height-question/Way4.vue')
        }
      ]
    },
  ]
})

export default router
