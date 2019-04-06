import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/Main.vue';
import RequestsList from './views/RequestsList.vue';
import Request from './views/Request.vue';
import Customer from './views/Customer.vue';
import Contractor from './views/Contractor.vue';
import NewRequest from './views/NewRequest.vue';
import Responses from './views/Responses.vue';
import Profile from './views/Profile.vue';
import Settings from './views/Settings.vue';
import NotFound from './views/NotFound.vue';
import Login from './views/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/',
      redirect: '/requests',
      name: 'main',
      component: Main,
      children: [
        {
          path: '',
          redirect: '/requests',
        },
        {
          path: '/requests',
          name: 'requestsList',
          component: RequestsList,
          meta: {
            title: 'Заявки',
            icon: 'note_add',
          },
        },
        {
          path: '/requests/:id',
          name: 'request',
          component: Request,
          props: (route) => ({ id: +route.params.id }),
        },
        {
          path: '/customer/:id',
          name: 'customer',
          component: Customer,
          props: (route) => ({ id: +route.params.id }),
        },
        {
          path: '/contractor/:id',
          name: 'countractor',
          component: Contractor,
          props: (route) => ({ id: +route.params.id }),
        },
        {
          path: '/new-request',
          name: 'newRequest',
          component: NewRequest,
        },
        {
          path: '/responses/:id?',
          name: 'responses',
          component: Responses,
          meta: {
            title: 'Заказчики',
            icon: 'email',
          },
          props: (route) => ({ id: +route.params.id }),
        },
        {
          path: '/profile',
          name: 'profile',
          component: Profile,
          meta: {
            title: 'Подрядчики',
            icon: 'person',
          },
        },
        {
          path: '/settings',
          name: 'settings',
          component: Settings,
          meta: {
            title: 'Настройки',
            icon: 'settings',
          },
        },
        {
          path: '*',
          name: 'notFound',
          component: NotFound,
        },
      ],
    },
  ],
});
