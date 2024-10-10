import { createRouter, createWebHistory } from 'vue-router';
import UserAuth from '../forms/UserAuth.vue';
import FormsLayout from '../forms/layouts/FormsLayout.vue';
import Account from '../forms/Account.vue';
import Appearance from '../forms/Appearance.vue';
import Notifications from '../forms/Notifications.vue';
import Display from '../forms/Display.vue';

const isAuthenticated = () => {
  return localStorage.getItem('userToken'); 
};

const routes = [
  {
    path: '/',
    redirect: '/forms/login',
  },
  {
    path: '/forms/login',
    component: UserAuth,
  },
  {
    path: '/forms',
    component: FormsLayout,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) {
        next('/forms/login');
      } else {
        next();
      }
    },
    children: [
      {
        path: 'account',
        component: Account,
      },
      {
        path: 'appearance',
        component: Appearance,
      },
      {
        path: 'notifications',
        component: Notifications,
      },
      {
        path: 'display',
        component: Display,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
