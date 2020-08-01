<template>
  <div class="share">
    <p>{{ share.title }}</p>
    <p>{{ share.content }}</p>
    <div class="data">
      <div class="user">
        <img :src="share.author.avatar" alt="" />
        <span class="name">{{ share.author.nickname }}</span>
      </div>
      <div class="message">
        <span class="time">{{ share.created_at | formatTime }}</span>
        <span class="writeBack"
          ><i class="iconfont iconicon_pinglunliang"></i
          ><span>{{ share.behaviors.length }}</span></span
        >
        <span class="like"
          ><i
            class="iconfont iconbtn_dianzan_big_nor"
            @click="clickLike"
            :class="{ color: islike }"
          ></i
          ><span>{{ share.star }}</span></span
        >
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: ['share'],
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
.share {
  padding: 15px 15px 0 15px;

  background-color: white;
  overflow: hidden;
  p {
    margin: 0;
    word-wrap: break-word;
    word-break: break-all;
    margin-bottom: 11px;
    &:nth-child(1) {
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 600;
      color: #181a39;
      line-height: 16px;
    }
    &:nth-child(2) {
      font-size: 13px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #545671;
      line-height: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .data {
    overflow: hidden;
    margin-bottom: 25px;
    .user {
      display: flex;
      align-items: center;
      float: left;
      margin-top: 8px;
      img {
        width: 22px;
        height: 22px;
        border-radius: 22px;
        margin-right: 10px;
      }
      .name {
        font-size: 12px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: #545671;
        line-height: 12px;
      }
    }
    .message {
      float: right;
      .color {
        color: @main-color;
      }
      span,
      i {
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: #b4b4bd;
        line-height: 16px;
      }
      span {
        font-size: 12px;
      }
      i {
        font-size: 16px;
        margin: 0 7px 0 22px;
      }
    }
  }
  hr {
    margin: 0;
    height: 1px;
    border: none;
    background-color: #f7f4f5;
  }
}
</style>
