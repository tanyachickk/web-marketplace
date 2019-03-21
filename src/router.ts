import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/Main.vue';
import Requests from './views/Requests.vue';
import Responses from './views/Responses.vue';
import Profile from './views/Profile.vue';
import Settings from './views/Settings.vue';
import Login from './views/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/requests',
      name: 'main',
      component: Main,
      children: [
        {
          path: 'requests',
          name: 'requests',
          component: Requests,
          meta: {
            title: 'Заявки',
            icon: 'note_add',
          },
        },
        {
          path: 'responses',
          name: 'responses',
          component: Responses,
          meta: {
            title: 'Отклики',
            icon: 'email',
          },
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile,
          meta: {
            title: 'Профиль',
            icon: 'person',
          },
        },
        {
          path: 'settings',
          name: 'settings',
          component: Settings,
          meta: {
            title: 'Настройки',
            icon: 'settings',
          },
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
