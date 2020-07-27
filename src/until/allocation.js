import axios from 'axios'

const regit = axios.create({
  baseURL: process.env.VUE_APP_URL
})
regit.interceptors.response.use(
  function (response) {
    // 请求成功

    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)
export default regit
