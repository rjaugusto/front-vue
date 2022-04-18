import { createRouter, createWebHistory } from 'vue-router';
import nprogress from 'nprogress';

const routes = [
  {
    path: '/',
    name: 'Create New Employee',
    component: () => import('../components/create-employee/CreateEmployeeComponent.vue'),
  },
  {
    path: '/list-employees',
    name: 'List All Employees',
    component: () => import('../components/list-employee/ListEmployeeComponent.vue'),
  },
  {
    path: '/edit-employees/:id',
    name: 'Edit Employees',
    component: () => import('../components/edit-employee/EditEmployeeComponent.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeResolve((to, next) => {
  // Quando houver o carregamento de uma págona incial, então usar o NProgress
  if (to.name) {
    nprogress.start()
  }
  next();
});

router.afterEach(() => {
  // Completa a animação da rota usando o progress bar
  nprogress.done()
});

export default router;
