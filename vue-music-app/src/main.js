// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'
import fastclick from 'fastclick'
import {
  /* eslint-disable no-unused-vars */
  Style, // 必需
  Slide,
  IndexList
} from 'cube-ui'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: require('./common/image/default_pic.jpg')
})
Vue.use(Slide)
Vue.use(IndexList)
fastclick.attach(document.body)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
