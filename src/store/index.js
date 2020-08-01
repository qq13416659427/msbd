import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: '',
    article: '',
    chart: '',
    share: ''
  },
  mutations: {
    SETUSERINFO (state, userInfo) {
      state.userInfo = userInfo
    },
    SETARTICLE (state, article) {
      state.article = article
    },
    SETCHART (state, chart) {
      state.chart = chart
    },
    SETSHARE (state, share) {
      state.share = share
    },
    SETPROPVALUE (state, { propName, value }) {
      state.userInfo[propName] = value
    },
    SETPROPART (state, { propName, value }) {
      state.article[propName] = value
    }
  },
  actions: {},
  modules: {}
})
