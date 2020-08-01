<template>
  <div class="article">
    <div class="articleMain">
      <div class="articleText">
        <p>{{ artlist.title }}</p>
        <div class="message">
          <span class="time">{{ artlist.created_at | formatTime }}</span>
          <span class="data">
            <span class="read"
              ><i class="iconfont iconicon_liulanliang"></i
              ><span>{{ artlist.read }}</span></span
            >
            <span class="like"
              ><i
                class="iconfont iconbtn_dianzan_big_nor"
                :class="{ color: islike }"
                @click="clickLike"
              ></i
              ><span>{{ artlist.star }}</span></span
            >
          </span>
        </div>
      </div>
      <img :src="artlist.cover" alt="" v-if="artlist.cover" />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: ['time', 'artlist'],
  data () {
    return {
      islike: false
    }
  },
  filters: {
    formatTime (value) {
      console.log(value)
      return moment(value).format('YYYY年MM月DD日')
    }
  },
  methods: {
    clickLike () {
      this.islike = !this.islike
    }
  }
}
</script>

<style lang="less">
.article {
  width: 100%;
  background: white;
  padding: 15px 15px 20px;
  .articleMain {
    display: flex;
    width: 100%;
    // overflow: hidden;
    .articleText {
      flex: 1;
      width: 100%;
      margin-right: 15px;
      position: relative;
      overflow: hidden;
      // background-color: pink;
      p {
        width: 100%;
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 600;
        color: black;
        line-height: 26px;
        letter-spacing: 1px;
        margin-bottom: 10px;
        word-wrap: break-word;
        word-break: break-all;
      }
      .message {
        width: 100%;
        font-size: 12px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: #b4b4bd;
        line-height: 12px;
        margin-bottom: -1px;
        .time {
          float: left;
        }
        .data {
          width: 115px;
          float: right;
          .color {
            color: @main-color;
          }
          i {
            margin-right: 7px;
          }
          .read {
            float: left;
          }
          .like {
            float: right;
          }
        }
      }
    }
    img {
      width: 113px;
      height: 75px;
    }
  }
}
</style>
