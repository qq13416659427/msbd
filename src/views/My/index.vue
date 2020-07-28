<template>
  <div class="my">
    <div class="notlog" v-if="userInfo == ''" @click="tologin">
      点击登录
    </div>
    <div class="top" v-if="userInfo">
      <div class="userbox">
        <div class="left">
          <h3>{{ userInfo.nickname }}</h3>
          <p>{{ userInfo.intro }}</p>
        </div>
        <div class="right">
          <img :src="userInfo.avatar" alt="" @click="getUser" />
        </div>
      </div>
      <ul>
        <li>
          <p>{{ userInfo.submitNum }}</p>
          <p>累计答题</p>
        </li>
        <li>
          <p>{{ userInfo.collectQuestions.length }}</p>
          <p>收藏题目</p>
        </li>
        <li>
          <p>{{ userInfo.errorNum }}</p>
          <p>我的错题</p>
        </li>
        <li>
          <p>{{ errorPercen }}<span style="font-size:11px">%</span></p>
          <p>正确率</p>
        </li>
      </ul>
    </div>

    <div class="bottom" v-if="userInfo">
      <mmcell
        title="我的岗位"
        :value="userInfo.position"
        icon="iconfont iconicon_mine_gangwei"
        class="job"
        @click="myCellClick"
      ></mmcell>
      <div class="statistics">
        <h4>面经数据</h4>
        <ul>
          <li>
            <p>
              昨日阅读<span>+{{ userInfo.shareData.comment.yesterday }}</span>
            </p>
            <h3>{{ userInfo.shareData.comment.total }}</h3>
            <h5>阅读总数</h5>
          </li>
          <li>
            <p>
              昨日阅读<span>+{{ userInfo.shareData.read.yesterday }}</span>
            </p>
            <h3>{{ userInfo.shareData.read.total }}</h3>
            <h5>获赞总数</h5>
          </li>
          <li>
            <p>
              昨日阅读<span>+{{ userInfo.shareData.star.yesterday }}</span>
            </p>
            <h3>{{ userInfo.shareData.star.total }}</h3>
            <h5>评论总数</h5>
          </li>
        </ul>
      </div>
      <div class="operation">
        <mmcell title="我的面经分享" icon="iconfont iconicon_mine_mianjing">
          <template #value>
            123
          </template>
        </mmcell>
        <mmcell title="我的信息" icon="iconfont iconicon_mine_xiaoxi"
          ><template #value>
            {{ userInfo.systemMessages }}
          </template></mmcell
        >
        <mmcell title="收藏的题库" icon="iconfont iconicon_mine_tikushoucang"
          ><template #value>
            {{ userInfo.collectQuestions.length }}
          </template></mmcell
        >
        <mmcell title="收藏的企业" icon="iconfont iconicon_mine_qiyeshoucang"
          ><template #value>
            123
          </template></mmcell
        >
        <mmcell title="我的错题" icon="iconfont iconicon_mine_cuoti"
          ><template #value>
            {{ userInfo.errorNum }}
          </template></mmcell
        >
        <mmcell title="收藏的面试经验" icon="iconfont iconxingxing2"
          ><template #value>
            {{ userInfo.collectArticles.length }}
          </template></mmcell
        >
      </div>
    </div>
  </div>
</template>

<script>
// import { getInfo } from '@/api/my.js'
import mmcell from '@/components/mmcell'
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  created () {},
  computed: {
    ...mapState(['userInfo']),
    errorPercen () {
      return (
        ((this.userInfo.submitNum - this.userInfo.errorNum) /
          this.userInfo.submitNum) *
        100
      ).toFixed(1)
    }
  },
  methods: {
    tologin () {
      this.$router.push('/login')
    },
    getUser () {
      this.$router.push('/User')
    },
    myCellClick () {
      console.log('OK')
    }
  },
  components: {
    mmcell
  }
}
</script>

<style lang="less">
.my {
  background-color: @border-color;
  .notlog {
    width: 100%;
    height: 100%;
    text-align: center;
    color: white;
    background-color: @main-color;
  }
  .top {
    position: relative;
    height: 215px;
    background: linear-gradient(45deg, #ce0031, #b8002c);
    padding: 0 15px;
    overflow: hidden;
    .userbox {
      margin: 30px 0 29px 0;
      overflow: hidden;
      .left {
        float: left;
        h3 {
          margin: 0;
          font-size: 21px;
          font-family: PingFangSC, PingFangSC-Semibold;
          font-weight: 600;
          color: @white-color;
          line-height: 30px;
        }
        p {
          margin: 0;
          font-size: 12px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 300;
          color: @white-color;
          line-height: 16px;
        }
      }
      .right {
        float: right;
        margin-right: 17px;
        img {
          height: 50px;
          width: 50px;
          border-radius: 50px;
        }
      }
    }
    ul {
      height: 100px;
      display: flex;
      justify-content: space-around;
      li {
        float: left;
        p {
          margin: 0;
          &:nth-child(1) {
            font-size: 21px;
            font-family: PingFangSC, PingFangSC-Semibold;
            font-weight: 600;
            color: @white-color;
            line-height: 28px;
          }
          &:nth-child(2) {
            opacity: 0.7;
            font-size: 12px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: @white-color;
            line-height: 16px;
          }
        }
      }
    }
  }
  .bottom {
    position: relative;
    padding: 26px 15px;

    .job {
      height: 55px;
      margin: -65px 0 10px 0;
      .van-cell__title {
        margin-left: 13px;
      }
      .van-cell {
        border-radius: 8px;
      }
    }
    .statistics {
      height: 142px;
      background-color: @white-color;
      overflow: hidden;
      margin-bottom: 10px;
      border-radius: 8px;
      h4 {
        margin: 19px 0 0 15px;
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        color: @main-font-color;
        line-height: 20px;
      }
      ul {
        display: flex;
        justify-content: space-around;
        li {
          float: left;
          p {
            font-size: 10px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: @minor-font-color;
            line-height: 14px;
            span {
              color: @assist-color;
            }
          }
          h3 {
            font-size: 20px;
            font-family: DINAlternate, DINAlternate-Bold;
            font-weight: 700;
            text-align: center;
            color: @main-font-color;
            line-height: 20px;
            margin: 0;
          }
          h5 {
            font-size: 12px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: center;
            color: @subdominant-font-color;
            line-height: 16px;
          }
        }
      }
    }
    .operation {
      .mmcell {
        .van-cell__title {
          margin-left: 13px;
        }
        .van-cell {
          padding-top: 20px;
          font-size: 15px;
          font-weight: 400;
          color: #181a39;
        }
        &:nth-child(1) {
          .van-cell {
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
          }
        }
        &:nth-last-child(1) {
          .van-cell {
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
          }
        }
      }
    }
  }
}
</style>
