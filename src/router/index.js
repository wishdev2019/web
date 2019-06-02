import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/login/login';
import footer from '@/components/Footer/index';
import home from '@/components/Home/index';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      name: 'login',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
        name: 'home',
      component: home
    }
  ],
});
