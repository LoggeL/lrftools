import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/IndexPage.vue') },
      { path: 'home', component: () => import('@/pages/IndexPage.vue') },
      {
        path: 'literature',
        component: () => import('@/pages/LiteraturePage.vue'),
      },
      {
        path: 'tile-generator',
        component: () => import('@/pages/TileGeneratorPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/404Page.vue'),
  },
]

export default routes
