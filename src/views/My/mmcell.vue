<template>
  <div class="mmcell">
    <van-cell
      :title="title"
      :value="value"
      :is-link="true"
      @click="callback"
      class="cell"
    >
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
  props: ['title', 'value', 'icon'],
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
  }
}
</style>
