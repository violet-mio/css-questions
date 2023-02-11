import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'way' },
      children: [
        {
          path: '/height-question/way',
          name: 'way',
          component: () => import('../views/height-question/Way.vue'),
          meta: { desc: '方式1：父元素设置`overflow:hidden`' }
        },
        {
          path: '/height-question/way2',
          name: 'way2',
          component: () => import('../views/height-question/Way2.vue'),
          meta: { desc: '方式2: 父元素内的末尾新增空元素，并设置清除浮动属性' }
        },
        {
          path: '/height-question/way3',
          name: 'way3',
          component: () => import('../views/height-question/Way3.vue'),
          meta: { desc: '方式3：父元素设置浮动' }
        },
        {
          path: '/height-question/way4',
          name: 'way4',
          component: () => import('../views/height-question/Way4.vue'),
          meta: { desc: '方式4：父元素末尾新增伪元素并设置`clear:both`' }
        }
      ]
    },
    {
      path: '/bfc',
      name: 'bfc',
      redirect: { name: 'marginMerge' },
      children: [
        {
          path: '/bfc/margin-merge',
          name: 'marginMerge',
          component: () => import('../views/bfc/index.vue'),
        }
      ]
    },
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
