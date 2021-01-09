// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Moment from 'moment';
import cookie from 'vue-cookies'

Moment.locale('zh-cn'); //设置语言 或 moment.lang('zh-cn');
Vue.prototype.$moment = Moment;//赋值使用
Vue.prototype.$cookies = cookie;
Vue.use(ElementUI);
Vue.prototype.$http = axios//将$http修改为axios
Vue.config.productionTip = false
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://192.168.1.108:8080/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
