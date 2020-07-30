import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'
import './style/iconfont.less'
import './style/variable.less'
import './style/base.less'
import mmNavBar from './components/mmNavBar.vue'
import mmcell from './components/mmcell.vue'
import area from '@/until/area.js'
Vue.use(Vant)
Vue.component(mmNavBar.name, mmNavBar)
Vue.component(mmcell.name, mmcell)
Vue.config.productionTip = false
Vue.prototype.$arealist = area
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
