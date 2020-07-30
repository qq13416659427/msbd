<template>
  <div class="userDetail">
    <mmNavBar title="我的资料"></mmNavBar>
    <div class="mainCell">
      <div class="photo">
        <mmcell
          title="头像"
          :to="{
            path: 'DataChange',
            query: { title: '修改头像', value: userInfo.avatar }
          }"
        >
          <template #value>
            <img :src="userInfo.avatar" alt="" class="photoimg" />
          </template>
        </mmcell>
      </div>
      <div class="info">
        <mmcell
          title="昵称"
          :to="{
            path: 'DataChange',
            query: { title: '修改昵称', value: userInfo.nickname, type: '' }
          }"
          ><template #value> {{ userInfo.nickname }}</template> ></mmcell
        >
        <mmcell title="性别" @click="sexclick"
          ><template #value>{{ sex[userInfo.gender] }}</template></mmcell
        >
        <mmcell title="地区" @click="pathclick"
          ><template #value>
            {{
              $arealist.county_list[userInfo.area] ||
                $arealist.city_list[userInfo.area] ||
                $arealist.province_list[userInfo.area]
            }}</template
          ></mmcell
        >
        <mmcell
          title="个人简介"
          :to="{
            path: 'DataChange',
            query: {
              title: '修改简介',
              value: userInfo.intro,
              type: 'textarea'
            }
          }"
          ><template #value> {{ userInfo.intro }}</template></mmcell
        >
      </div>

      <van-button type="primary" plain size="large" @click="loginOut"
        >退出登录</van-button
      >
    </div>
    <van-popup v-model="show" position="bottom">
      <van-picker
        title="标题"
        show-toolbar
        :columns="sex"
        :default-index="userInfo.gender"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </van-popup>
    <van-popup v-model="pathshow" position="bottom">
      <van-area
        title="标题"
        :area-list="$arealist"
        :value="userInfo.area"
        @confirm="onConpath"
        @cancel="onCancelpath"
        :columns-num="2"
      />
    </van-popup>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { delToken } from '@/until/local.js'
import { editData } from '@/api/my.js'
export default {
  data () {
    return {
      sex: ['未知', '男', '女'],
      show: false,
      pathshow: false
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },

  methods: {
    ...mapMutations(['SETUSERINFO']),
    onConfirm (value, index) {
      const gender = index
      this.$toast.loading({
        message: ''
      })
      editData({ gender }).then(res => {
        this.userInfo.gender = index
        this.$toast.success('')
        this.show = false
      })
    },
    onCancel () {
      this.show = false
    },
    onConpath (value, index) {
      console.log(value[1].code)
      const area = value[1].code
      this.$toast.loading({
        message: ''
      })
      editData({ area }).then(res => {
        this.userInfo.area = value[1].code
        this.$toast.success('')
        this.pathshow = false
      })
    },
    onCancelpath () {
      this.pathshow = false
    },
    sexclick () {
      this.show = true
    },
    pathclick () {
      this.pathshow = true
    },
    loginOut () {
      this.$dialog
        .confirm({
          title: '标题',
          message: '确认要退出吗'
        })
        .then(() => {
          delToken()
          this.SETUSERINFO('')
          this.$router.push('/login')
        })
        .catch(() => {
          // on cancel
        })
    }
  }
}
</script>

<style lang="less">
.userDetail {
  .van-nav-bar__title {
    font-size: 18px;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    color: @black-color;
    line-height: 18px;
  }

  .mainCell {
    padding: 18px 15px 0;
    .photo {
      .cell {
        border-radius: 4px;
      }
      .photoimg {
        width: 40px;
        height: 40px;
        border-radius: 40px;
        margin-bottom: 0px;
        position: absolute;
        right: 3px;
        top: -8px;
      }
    }
    .info {
      margin: 10px 0 15px;
      .mmcell {
        &:nth-child(1) {
          .cell {
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
          }
        }
        &:nth-last-child(1) {
          .cell {
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            .van-cell__value {
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
    .van-button--primary {
      border: none;
      border-radius: 8px;
    }
    .van-button--plain.van-button--primary {
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #e40137;
      line-height: 16px;
      color: @main-color;
    }
  }
}
</style>
