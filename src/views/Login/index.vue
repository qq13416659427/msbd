<template>
  <div class="login">
    <mmNavBar></mmNavBar>
    <div class="Linput">
      <h1>您好，请登录</h1>
      <van-form @submit="onSubmit" show-error-message ref="form">
        <van-field
          v-model="mobile"
          name="手机号"
          placeholder="请输入手机号"
          maxlength="16"
          :rules="[
            { required: true, message: '请填写手机号' },
            {
              pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
              message: '请规范填写手机号'
            }
          ]"
        >
          <template #left-icon>
            <!-- 通过iconfont 的图标来自定义 -->
            <i class="iconfont iconbianzu1"></i> </template
        ></van-field>
        <van-field
          v-model="code"
          name="验证码"
          placeholder="请输入验证码"
          maxlength="16"
          :rules="[{ required: true, message: '请填写验证码' }]"
        >
          <template #left-icon>
            <!-- 通过iconfont 的图标来自定义 -->
            <i class="iconfont iconyanzhengma"></i>
          </template>
          <template #extra>
            <!-- 通过iconfont 的图标来自定义 -->
            <span v-show="time == 0" style="margin-right:15px" @click="getCode"
              >获取验证码</span
            >
            <span v-show="time != 0">{{ time }}</span
            ><span v-show="time != 0" style="margin-right:15px">S后重试</span>
          </template>
        </van-field>
        <p>登录即同意<a>《用户使用协议》</a>和<a>《隐私协议》</a></p>
        <div>
          <van-button round block native-type="submit" type="danger">
            确定
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { getcode, toLogin } from '@/api/login.js'
import { mapMutations } from 'vuex'
import { saveToken } from '@/until/local.js'
export default {
  watch: {
    time (newvalue, oldvalue) {
      if (this.time !== 0) {
        setTimeout(() => {
          this.time--
        }, 1000)
      }
    }
  },
  data () {
    return {
      mobile: '',
      code: '',
      time: 0
    }
  },
  methods: {
    ...mapMutations(['SETUSERINFO']),
    getCode () {
      this.$refs.form
        .validate('手机号')
        .then(() => {
          this.$toast.loading({
            message: '',
            duration: 0
          })
          getcode({ mobile: this.mobile }).then(res => {
            this.$toast.success({
              message: res.data
            })
            this.time = 60
            this.time--
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    onSubmit (values) {
      console.log('submit', values)
      this.$toast.loading({
        message: '',
        duration: 0
      })
      toLogin({ mobile: this.mobile, code: this.code }).then(res => {
        console.log(res)
        this.$toast.success({
          message: '成功'
        })

        res.data.user.avatar = process.env.VUE_APP_URL + res.data.user.avatar
        saveToken(res.data.jwt)
        this.SETUSERINFO(res.data.user)
        if (this.$route.query.redirect) {
          this.$router.push(`${this.$route.query.redirect}`)
        } else {
          this.$router.push('/Company')
        }
      })
    }
  }
}
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
  .Linput {
    width: 100%;
    background-color: @white-color;
    overflow: hidden;
    padding: 0 15px;
    .van-cell {
      padding: 10px 0px;
      &::after {
        left: 0;
      }
      span {
        color: @assist-color;
        font-size: 15px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
      }
      .van-field__left-icon {
        margin: 0 20px 0 15px;
      }
    }
    h1 {
      font-size: 18px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      color: @main-font-color;
      line-height: 18px;
      margin: 50px 0 63px 0px;
    }
    p {
      font-size: 12px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: @main-font-color;
      line-height: 12px;
      margin: 15px 0 44px;
      a {
        color: @assist-color;
      }
    }
    .van-button--normal {
      font-size: 18px;
    }
  }
}
</style>
