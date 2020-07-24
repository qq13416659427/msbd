<template>
  <div class="app">
    <router-view></router-view>
    <van-tabbar v-model="active" :route="true" placeholder>
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
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less">
.app {
  width: 100%;
  height: 100%;
  .van-tabbar {
    height: 54px;
    // .van-tabbar-item {
    //   padding-bottom: 26px;
    // }
    .iconfont {
      font-size: 28px;
      color: @minor-font-color;
    }
    .van-tabbar-item--active {
      color: @main-color;
    }
    .van-tabbar-item__text,
    font {
      line-height: 14px;
      font-size: 14px;
    }
  }
}
</style>
