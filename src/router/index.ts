import { createRouter, createWebHistory } from 'vue-router';
import PasswordListView from '@/views/PasswordListView.vue';
import AboutView from '@/views/AboutView.vue';
import NotFoundErrorView from '@/views/errors/NotFoundErrorView.vue';
import NetworkErrorView from '@/views/errors/NetworkErrorView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/password-list',
      name: 'password-list',
      component: PasswordListView
    },
    {
      path: '/about-us',
      name: 'about',
      component: AboutView
    },
    {
      path: '/about',
      redirect: { name: 'about' }
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFoundErrorView
    },
    {
      path: '/404/:resource',
      name: '404Resource',
      component: NotFoundErrorView,
      props: true
    },
    {
      path: '/network-error',
      name: 'NetworkError',
      component: NetworkErrorView
    }
  ]
});

export default router;
