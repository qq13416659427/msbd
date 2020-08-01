<template>
  <div class="app">
    <router-view></router-view>
    <van-tabbar :route="true" placeholder v-show="$route.meta.showtabbar">
      <van-tabbar-item class="iconfont iconicon_footbar_gs_sel" to="/Company"
        >公司</van-tabbar-item
      >
      <van-tabbar-item class="iconfont iconicon_footbar_st_sel" to="/Exercise"
        >刷题</van-tabbar-item
      >
      <van-tabbar-item class="iconfont iconicon_footbar_fx_nor" to="/Find"
        >发现</van-tabbar-item
      >
      <van-tabbar-item class="iconfont iconicon_footbar_wode_sel" to="/My"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { getInfo } from '@/api/my.js'
export default {
  data () {
    return {}
  },
  methods: {
    ...mapMutations(['SETUSERINFO'])
  },
  created () {
    getInfo().then(res => {
      if (res.code === 401 || res.code === 403) {
        this.$store.commit('SETUSERINFO', '')
      } else {
        res.data.avatar = process.env.VUE_APP_URL + res.data.avatar
        this.$store.commit('SETUSERINFO', res.data)
      }
    })
  }
}
</script>

<style lang="less">
.app {
  width: 100%;
  height: 100%;
  .van-tabbar__placeholder {
    height: 50px !important;
  }
  .van-tabbar {
    // height: 54px;
    .iconfont {
      font-size: 28px;
      color: @minor-font-color; //字体+图标的颜色
    }
    .van-tabbar-item--active {
      color: @main-color; //点击后修改的颜色
    }
    .van-tabbar-item__text,
    font {
      line-height: 14px;
      font-size: 14px;
    }
  }
}
</style>
