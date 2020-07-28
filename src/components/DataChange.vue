<template>
  <div class="DataC">
    <mmNavBar
      :title="$route.query.title"
      rightText="保存"
      @onClickRight="saveData"
    ></mmNavBar>
    <div class="mainText">
      <van-field v-model="$route.query.value" label="" />
    </div>
  </div>
</template>

<script>
import mmNavBar from '@/components/mmNavBar'
import { editData } from '@/api/my.js'
export default {
  data () {
    return {}
  },
  components: {
    mmNavBar
  },
  methods: {
    saveData () {
      editData().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less">
.DataC {
  width: 100%;
  height: 100%;
  background-color: white;
  .van-nav-bar__title {
    font-size: 18px;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    color: @black-color;
  }
  .van-nav-bar__text {
    color: @black-color;
  }
  .mainText {
    padding: 20px 15px 0;
    .van-cell {
      border-radius: 4px;
      background-color: #f7f4f5;
    }
  }
}
</style>
