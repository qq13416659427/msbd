import axios from 'axios'
import { Toast } from 'vant'

const regit = axios.create({
  baseURL: process.env.VUE_APP_URL
})
regit.interceptors.response.use(
  function (response) {
    // 请求成功
    console.log(response)
    const code = response.data.code
    if (code === 400 || code === 403) {
      Toast.fail(response.data.message)
      return Promise.reject(new Error(response.data.message))
    } else {
      return response.data
    }
  },
  function (error) {
    return Promise.reject(new Error(error))
  }
)
export default regit
