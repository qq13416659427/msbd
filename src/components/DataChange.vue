<template>
  <div class="DataC">
    <mmNavBar
      :title="$route.query.title"
      rightText="保存"
      @onClickRight="saveData"
    ></mmNavBar>
    <div class="mainText">
      <van-field
        v-model="text"
        label=""
        :type="$route.query.type"
        autosize
        v-if="$route.query.type != undefined"
      />
      <van-uploader
        v-model="fileList"
        :max-count="1"
        v-else
        :after-read="afterRead"
      >
        <!-- <template #preview-cover="{ file }">
          <div class="preview-cover van-ellipsis">{{ file.name }}</div>
        </template> -->
      </van-uploader>
    </div>
  </div>
</template>

<script>
import { editData, photoup } from '@/api/my.js'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      text: this.$route.query.value,
      fileList: [
        {
          url: this.$route.query.value
        }
      ]
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    afterRead (file) {
      console.log(file)
      photoup({ files: file.content }).then(res => {
        console.log(res)
      })
    },
    saveData () {
      this.$toast.loading({
        message: ''
      })
      if (this.$route.query.type === '') {
        editData({ nickname: this.text }).then(res => {
          this.userInfo.nickname = this.text
          this.$toast.success('')
        })
      } else {
        editData({ intro: this.text }).then(res => {
          this.userInfo.intro = this.text
          this.$toast.success('')
        })
      }
    }
  }
}
</script>

<style lang="less">
.DataC {
  width: 100%;
  height: 100%;
  background-color: white;
  .van-nav-bar__title {
    font-size: 18px;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    color: @black-color;
  }
  .van-nav-bar__text {
    color: @black-color;
  }
  .mainText {
    padding: 20px 15px 0;
    .van-cell {
      border-radius: 4px;
      background-color: #f7f4f5;
    }
    .van-uploader__wrapper {
      margin-left: 137.5px;
    }
    .preview-cover {
      position: absolute;
      box-sizing: border-box;
      bottom: 0;
      width: 100%;
      padding: 4px;
      color: #fff;
      font-size: 12px;
      text-align: center;
      background: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
