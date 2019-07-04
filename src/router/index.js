import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/login/login';
import home from '@/components/Home/index';
// import game from '@/components/Game/index';//如意唐三彩
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
    /*,
    {
      path:'/game',
      name:'game',
      component:game
    }*/
  ],
});
