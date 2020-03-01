import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
//导入自己封装的插件
import toast from 'components/common/toast/toast'
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(toast);
//懒加载时显示的占位图片
Vue.use(VueLazyload,{
  loading:require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store,
  toast
}).$mount('#app')
