import Vue from 'vue';
import App from './App';
import router from './router';
/*引入lodash*/
import _ from 'lodash';
Vue.prototype._ = _;
import md5 from 'js-md5'
Vue.config.productionTip = false;

/*引入ui库*/
import { Button, Cell, CellGroup, Checkbox, CheckboxGroup, Toast, Tab, Tabs, DatetimePicker  } from 'vant'
Vue.use(Button);
Vue.use(Cell).use(CellGroup);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(Toast);
Vue.use(Tab).use(Tabs);
Vue.use(DatetimePicker);

/*引入阿里图标*/
import './assets/font/iconfont.css';

/*引入vuex*/
import store from './store/store.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// /*引入axios*/
// import Axios from 'axios';
// Vue.prototype.$axios = Axios;
// import QS from 'qs'
// // 超时时间
// Axios.defaults.timeout = 5000;
// // http请求拦截器
// Axios.interceptors.request.use(config => {
//   if (config.method == 'post') {
//     config.data = QS.stringify(config.data); //防止post请求参数无法传到后台  在这里就用到了qs
//   }
//   let loading = Toast.loading({
//     mask: true,
//     message: '加载中...',
//     loadingType: 'spinner'
//   });
//   return config
// }, error => {
//   let loading = Toast.loading({
//     mask: true,
//     message: '加载中...',
//     loadingType: 'spinner'
//   });
//   loading.clear(); //关闭加载前，记得重新定义实例
//   return Promise.reject(error)
// });
// // http响应拦截器
// Axios.interceptors.response.use(data => {
//   let loading = Toast.loading({
//     mask: true,
//     message: '加载中...',
//     loadingType: 'spinner'
//   });
//   loading.clear();
//   return data
// }, error => {
//   let loading = Toast.loading({
//     mask: true,
//     message: '加载中...',
//     loadingType: 'spinner'
//   });
//   loading.clear();
//   return Promise.reject(error)
// });
// //引入mock
// require('./mock');

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

