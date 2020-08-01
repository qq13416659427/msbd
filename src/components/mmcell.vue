<template>
  <div class="mmcell">
    <van-cell
      :title="title"
      :value="value"
      :is-link="true"
      @click="callback"
      class="cell"
      :to="to"
    >
      <template #default>
        <slot name="value"></slot>
      </template>
      <template #icon>
        <!-- 通过iconfont 的图标来自定义 -->
        <i :class="icon"></i>
      </template>
      <template #right-icon>
        <!-- 通过iconfont 的图标来自定义 -->
        <i class="iconfont iconicon_more"></i>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'mmcell',
  props: ['title', 'value', 'icon', 'to'],
  data () {
    return {}
  },
  methods: {
    callback () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less">
.mmcell {
  .cell {
    padding-top: 20px;
    height: 55px;
    .van-cell__value {
      overflow: visible;
      text-align: right;
      white-space: nowrap;
    }
    .iconicon_more {
      font-size: 14px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 400;
      color: @subdominant-font-color;
    }
  }
}
</style>
