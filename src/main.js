import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'amfe-flexible/index'
// 引入饿了么插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
  //引入want插件
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(ElementUI);
Vue.use(Vant);

