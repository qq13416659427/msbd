<template>
  <div class="chart">
    <div class="top">
      <span class="city">
        <van-tag color="#eceaea" text-color="#545671" size="large">{{
          chart.city
        }}</van-tag>
      </span>
      <span class="position">
        <van-tag color="#eceaea" text-color="#545671" size="large">{{
          chart.position
        }}</van-tag>
      </span>
    </div>
    <div class="yearData" :class="{ auto }">
      <div class="bar" v-for="(item, index) in chart.yearSalary" :key="index">
        <span class="year">{{ item.year.split('工资')[0] }}</span>
        <van-progress
          stroke-width="12"
          :percentage="(item.salary / chart.topSalary) * 100"
          :pivot-text="'￥' + item.salary"
          color="#FE6D67"
        />
        <span class="percent">
          <i
            class="iconfont iconicon_xiajiang"
            :class="{
              iconicon_xiajiang: item.percent > 0,
              red:
                item.percent < 0 ||
                item.percent == undefined ||
                item.percent == 0,
              iconicon_shangsheng: item.percent > 0,
              green: item.percent > 0
            }"
          ></i>
          <span>{{ Math.abs(item.percent) || 0 }}%</span>
        </span>
      </div>
    </div>
    <p class="more">
      <span @click="moreClick">{{ auto ? '取消' : '展开更多' }}</span>
      <i
        class="iconfont"
        :class="{ iconbtn_share_close: auto, iconicon_zhankai: !auto }"
        @click="moreClick"
      ></i>
    </p>
  </div>
</template>

<script>
export default {
  props: ['chart'],
  data () {
    return {
      auto: false
    }
  },
  methods: {
    moreClick () {
      this.auto = !this.auto
    }
  }
}
</script>

<style lang="less">
.chart {
  background-color: white;
  padding: 5px 15px 15px;
  .top {
    margin-bottom: 22px;
    .city {
      margin-right: 10px;
    }
    .position {
    }
  }
  .more {
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: center;
    color: #545671;
    line-height: 14px;
    margin-bottom: 0;
    i {
      margin-left: 7px;
      font-size: 12px;
    }
  }
  .auto {
    max-height: 320px !important;
  }
  .yearData {
    max-height: 140px;
    overflow: hidden;
    transition: max-height 0.5s;
    .bar {
      .year {
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: #545671;
        line-height: 14px;
      }
      .van-progress {
        width: 218px !important;
        display: inline-block;
        margin: 0 14px 0 11px;

        .van-progress__pivot {
          line-height: 12px;
        }
      }
      .percent {
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: #5b5d75;
        line-height: 14px;
        .red {
          color: #fe6d67;
        }
        .green {
          color: #00d47a;
        }
        i {
          margin-right: 8px;
        }
      }
    }
  }
}
</style>
