<template>
  <div class="userDetail">
    <mmNavBar title="我的资料"></mmNavBar>
    <div class="mainCell">
      <div class="photo">
        <mmcell title="头像">
          <template #value>
            <img :src="userInfo.avatar" alt="" class="photoimg" />
          </template>
        </mmcell>
      </div>
      <div class="info">
        <mmcell
          title="昵称"
          :to="{
            path: 'DataChange',
            query: { title: '修改昵称', value: userInfo.nickname }
          }"
          ><template #value> {{ userInfo.nickname }}</template> ></mmcell
        >
        <mmcell
          title="性别"
          :to="{
            path: 'DataChange',
            query: { title: '修改性别', value: sex[userInfo.gender] }
          }"
          ><template #value>{{ sex[userInfo.gender] }}</template></mmcell
        >
        <mmcell
          title="地区"
          :to="{
            path: 'DataChange',
            query: { title: '修改地区', value: userInfo.area }
          }"
          ><template #value> {{ userInfo.area }}</template></mmcell
        >
        <mmcell
          title="个人简介"
          :to="{
            path: 'DataChange',
            query: { title: '修改简介', value: userInfo.intro }
          }"
          ><template #value> {{ userInfo.intro }}</template></mmcell
        >
      </div>
      <van-button type="primary" plain size="large" @click="loginOut"
        >退出登录</van-button
      >
    </div>
  </div>
</template>

<script>
import mmNavBar from '@/components/mmNavBar'
import mmcell from '@/components/mmcell'
import { mapState, mapMutations } from 'vuex'
import { delToken } from '@/until/local.js'
export default {
  data () {
    return {
      sex: {
        0: '未知',
        1: '男',
        2: '女'
      }
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  components: {
    mmNavBar,
    mmcell
  },
  methods: {
    ...mapMutations(['SETUSERINFO']),
    loginOut () {
      delToken()
      this.SETUSERINFO('')
      this.$router.push('/My')
    }
  }
}
</script>

<style lang="less">
.userDetail {
  .van-nav-bar__title {
    font-size: 18px;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    color: @black-color;
    line-height: 18px;
  }

  .mainCell {
    padding: 18px 15px 0;
    .photo {
      .cell {
        border-radius: 4px;
      }
      .photoimg {
        width: 40px;
        height: 40px;
        border-radius: 40px;
        margin-bottom: 0px;
        position: absolute;
        right: 3px;
        top: -8px;
      }
    }
    .info {
      margin: 10px 0 15px;
      .mmcell {
        &:nth-child(1) {
          .cell {
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
          }
        }
        &:nth-last-child(1) {
          .cell {
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
          }
        }
      }
    }
    .van-button--primary {
      border: none;
      border-radius: 8px;
    }
    .van-button--plain.van-button--primary {
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #e40137;
      line-height: 16px;
      color: @main-color;
    }
  }
}
</style>
