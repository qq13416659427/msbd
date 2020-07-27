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
Vue.use(Vant)
Vue.component(mmNavBar.name, mmNavBar)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
