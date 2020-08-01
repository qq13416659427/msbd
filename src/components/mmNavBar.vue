<template>
  <div class="mmnavbar">
    <van-nav-bar
      :left-text="leftText"
      :right-text="rightText"
      :title="title"
      left-arrow
      placeholder
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed
    >
      <template #left>
        <van-icon class="iconfont iconbtn_nav_back" size="44" />
      </template>
      <template #title>
        <slot name="title"></slot>
      </template>
      <template #right>
        <slot name="right"></slot>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'mmNavBar',
  props: ['leftText', 'rightText', 'title'],
  data () {
    return {}
  },
  methods: {
    onClickRight () {
      this.$emit('onClickRight')
    },
    onClickLeft () {
      // this.$emit('onClickLeft')
      if (this.$route.query.redirect) {
        if (this.$route.query.redirect === '/My') {
          this.$router.push('/Company')
        } else {
          this.$router.push(`${this.$route.query.redirect}`)
        }
      } else if (this.$route.path === '/User') {
        // 在user组件后退到/my 防止go（-1）乱来
        this.$router.push('/My')
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="less">
.mmnavbar {
  .van-nav-bar__left {
    padding: 0;
    .van-icon {
      color: @black-color;
    }
  }
}
</style>
