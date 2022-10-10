import frontVue from '@/layouts/front.vue'
import articleVue from '@/views/article/index.vue'
import { RouteRecordRaw } from 'vue-router'
import articleShow from '@/views/article/show.vue'
import categoryVue from '@/views/category/index.vue'
import createVue from '@/views/article/create.vue'
import updateVue from '@/views/article/update.vue'
export default {
  path: '/',
  component: frontVue,
  children: [
    {
      name: 'home',
      path: '/',
      component: articleVue,
    },
    {
      name: 'show',
      path: 'article/:id',
      component: articleShow,
    },
    {
      name: 'category',
      path: 'category/:cid',
      component: categoryVue,
    },
    {
      name: 'create',
      path: 'article',
      component: createVue,
    },
    {
      name: 'update',
      path: 'article/:id',
      component: updateVue,
    },
  ],
} as RouteRecordRaw
