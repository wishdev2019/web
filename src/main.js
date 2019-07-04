import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Cell, CellGroup, Checkbox, CheckboxGroup, Toast, Tab, Tabs, DatetimePicker  } from 'vant'
import { getToken,removeToken } from "./api/utils";

/*引入lodash*/
import _ from 'lodash';
Vue.prototype._ = _;
import md5 from 'js-md5'
Vue.config.productionTip = false;
Vue.prototype.$md5 = md5

/*引入ui库*/
Vue.use(Button);
Vue.use(Cell).use(CellGroup);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(Toast);
Vue.use(Tab).use(Tabs);
Vue.use(DatetimePicker);

/*引入阿里图标*/
import './assets/font/iconfont.css';

Vue.use(ElementUI);

import { manageadd_query } from '@/api/request/request'
import { objectIsEmpty } from '@/api/utils'

router.beforeEach((to,from,next) => {
  const hasToken = getToken()
  if ( hasToken && hasToken != 'null'){

    if(!store.state.user || objectIsEmpty(store.state.user)){
      manageadd_query({
        callback: (res) =>{
          store.commit('handleUser',res.data.data[0])
          console.log(store.state.user)
        }
      })
    }

    if (to.path == '/'){
      next({path : '/home'})
    }else{
      next()
    }
  }else{
    if (to.path != '/login'){
      next({path : '/login'})
    }else{
      next()
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

