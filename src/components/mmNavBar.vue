<template>
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
      this.$emit('onClickLeft')
    }
  }
}
</script>

<style></style>
