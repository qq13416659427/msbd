import regit from '../until/allocation'
// import { getToken } from '@/until/local.js'
function getArt (params) {
  return regit({
    url: '/articles/technic',
    params
  })
}

function getchartData (params) {
  return regit({
    url: '/chart-data/hot',
    params
  })
}
function getshare (params) {
  return regit({
    url: '/articles/share',
    // headers: { authorization: 'Bearer ' + getToken() },
    params
  })
}
export { getArt, getchartData, getshare }
