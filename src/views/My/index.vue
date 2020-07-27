<template>
  <div class="my">
    <div class="top">
      <div class="userbox">
        <div class="left">
          <h3>续命咖啡</h3>
          <p>面试不求人，我有面试宝典</p>
        </div>
        <div class="right">
          <img src="@/assets/img/1.jpg" alt="" />
        </div>
      </div>
      <ul>
        <li>
          <p>298</p>
          <p>累计答题</p>
        </li>
        <li>
          <p>98</p>
          <p>收藏题目</p>
        </li>
        <li>
          <p>198</p>
          <p>我的错题</p>
        </li>
        <li>
          <p>76<span style="font-size:11px">%</span></p>
          <p>正确率</p>
        </li>
      </ul>
    </div>

    <div class="bottom">
      <mmcell
        title="我的岗位"
        value="产品经理"
        icon="iconfont iconicon_mine_gangwei"
        class="job"
        @click="myCellClick"
      ></mmcell>
      <div class="statistics">
        <h4>面经数据</h4>
        <ul>
          <li>
            <p>昨日阅读<span>+300</span></p>
            <h3>17</h3>
            <h5>阅读总数</h5>
          </li>
          <li>
            <p>昨日阅读<span>+300</span></p>
            <h3>297</h3>
            <h5>获赞总数</h5>
          </li>
          <li>
            <p>昨日阅读<span>+300</span></p>
            <h3>187</h3>
            <h5>评论总数</h5>
          </li>
        </ul>
      </div>
      <div class="operation">
        <mmcell
          title="我的面经分享"
          value="123"
          icon="iconfont iconicon_mine_mianjing"
        ></mmcell>
        <mmcell
          title="我的信息"
          value="123"
          icon="iconfont iconicon_mine_xiaoxi"
        ></mmcell>
        <mmcell
          title="收藏的题库"
          value="123"
          icon="iconfont iconicon_mine_tikushoucang"
        ></mmcell>
        <mmcell
          title="收藏的企业"
          value="123"
          icon="iconfont iconicon_mine_qiyeshoucang"
        ></mmcell>
        <mmcell
          title="我的错题"
          value="123"
          icon="iconfont iconicon_mine_cuoti"
        ></mmcell>
        <mmcell
          title="收藏的面试经验"
          value="123"
          icon="iconfont iconxingxing2"
        ></mmcell>
      </div>
    </div>
  </div>
</template>

<script>
import mmcell from './mmcell'
export default {
  data () {
    return {
      mycell: {
        share: 1
      }
    }
  },
  methods: {
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
