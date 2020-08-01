<template>
  <div class="DataC">
    <mmNavBar
      :title="'修改' + title[$route.query.type]"
      rightText="保存"
      @onClickRight="saveData"
    ></mmNavBar>
    <div class="mainText">
      <van-field
        v-model="text"
        label=""
        :type="$route.query.type == 'intro' ? 'textarea' : ''"
        autosize
        v-if="$route.query.type != 'avatar'"
      />
      <van-uploader
        v-model="fileList"
        :max-count="1"
        v-else
        :after-read="afterRead"
        preview-size="200px"
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
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      text: '',
      fileList: [],
      title: {
        nickname: '昵称',
        intro: '简介',
        avatar: '头像',
        position: '职位'
      },
      data: {},
      avaphoto: {}
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  created () {
    this.fileList.push({ url: this.userInfo[this.$route.query.type] })
    this.text = this.userInfo[this.$route.query.type]
  },
  methods: {
    ...mapMutations(['SETPROPVALUE']),
    afterRead (file) {
      var data = new FormData()
      data.append('files', file.file)
      photoup(data).then(res => {
        console.log(res)
        this.avaphoto.url = process.env.VUE_APP_URL + res.data[0].url
        this.avaphoto.id = res.data[0].id
      })
    },
    saveData () {
      this.data[this.$route.query.type] = this.text
      this.$toast.loading({
        message: ''
      })
      if (this.$route.query.type !== 'avatar') {
        editData(this.data).then(res => {
          this.SETPROPVALUE({
            propName: this.$route.query.type,
            value: this.text
          })
          this.$toast.success('')
        })
      } else {
        console.log(this.avaphoto)
        this.data[this.$route.query.type] = this.avaphoto.id
        this.SETPROPVALUE({
          propName: this.$route.query.type,
          value: this.avaphoto.url
        })
        editData(this.data).then(res => {
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
    text-align: center;
    .van-cell {
      border-radius: 4px;
      background-color: #f7f4f5;
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
