<template>
  <div class="find">
    <van-nav-bar title="发现" />
    <div class="findmain">
      <div class="acrobatics">
        <mmcell title="面试技巧">
          <template #value><a @click="moreclike">查看更多</a></template>
        </mmcell>
        <articleD
          v-for="(item, index) in article"
          :artlist="item"
          :key="index"
        ></articleD>
      </div>
      <div class="bazaar">
        <mmcell title="市场经济">
          <template #value><a>查看更多</a></template>
        </mmcell>
        <chart :chart="chart"></chart>
      </div>
      <div class="expShare" v-if="share">
        <mmcell title="面经分享">
          <template #value><a>查看更多</a></template>
        </mmcell>
        <share
          v-for="(item, index) in share"
          :key="index"
          :share="item"
        ></share>
      </div>
    </div>
  </div>
</template>

<script>
import { getArt, getchartData, getshare } from '@/api/find.js'
import articleD from './article'
import chart from './chart'
import share from './share'
import { mapMutations, mapState } from 'vuex'

export default {
  components: {
    articleD,
    chart,
    share
  },
  computed: {
    ...mapState(['article', 'chart', 'share'])
  },

  created () {
    getArt({ limit: 5 }).then(res => {
      res.data.list.forEach(item => {
        if (item.cover !== null) {
          item.cover = process.env.VUE_APP_URL + item.cover
        }
      })
      this.SETARTICLE(res.data.list)
      console.log(res.data.list)
      // console.log(process.env.VUE_APP_URL)
    })
    getchartData().then(res => {
      res.data.yearSalary.reverse()
      this.SETCHART(res.data)
    })
    getshare().then(res => {
      res.data.list.forEach(item => {
        item.author.avatar = process.env.VUE_APP_URL + item.author.avatar
      })
      this.SETSHARE(res.data.list)
      console.log(res)
    })
  },
  methods: {
    ...mapMutations(['SETARTICLE', 'SETPROPART', 'SETCHART', 'SETSHARE']),
    moreclike () {
      this.$router.push('/sArticle')
    }
  }
}
</script>

<style lang="less">
.find {
  .van-nav-bar__title {
    font-size: 18px;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    color: @black-color;
    line-height: 46px;
  }
  .van-cell__title {
    font-size: 18px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 600;
    color: @black-color;
    line-height: 18px;
  }
  .findmain {
    // margin-bottom: 300px;
    .acrobatics {
      // background-color: white;
      margin-bottom: 10px;
    }
    .bazaar {
      margin-bottom: 10px;
      .van-cell__title {
        font-size: 18px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 600;
        color: @black-color;
        line-height: 18px;
      }
    }
    .expShare {
    }
  }
}
</style>
