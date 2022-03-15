import { createRouter, createWebHashHistory } from 'vue-router'
import toyApp from '../views/toy-app.vue';
import toyEdit from '../views/toy-edit.vue';
import toyDetails from '../views/toy-details.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: toyApp
    },
    {
      path: '/toy/details/:toyId',
      name: 'toy-details',
      component: toyDetails
    },
    {
      path: '/toy/edit/:toyId?',
      name: 'toy-edit',
      component: toyEdit
    }
  ]
})

export default router
