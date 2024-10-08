import { createRouter, createWebHistory } from 'vue-router';
import FormsLayout from '../forms/layouts/FormsLayout.vue';
import Account from '../forms/Account.vue';
import Appearance from '../forms/Appearance.vue';
import Notifications from '../forms/Notifications.vue';
import Display from '../forms/Display.vue';
const routes = [
  {
    path: '/',
    redirect: '/forms/account', 
  },
  {
    path: '/forms/account',
    component: Account,
  },
  {
    path: '/forms/appearance',
    component: Appearance,
  },
  {
    path: '/forms/notifications',
    component: Notifications,
  },
  {
    path: '/forms/display',
    component: Display,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
