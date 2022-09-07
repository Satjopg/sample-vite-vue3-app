import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'top',
    component: async () => {
      const top = await import('@/pages/Top.vue');
      console.log(top)
      return top;
    }
  },
  {
    path: '/login',
    name: 'login',
    component: async () => {
      const login = await import('@/pages/Login.vue');
      return login;
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach(async (to, from, next) => {
  console.log(to)
  next()
});

export default router;
