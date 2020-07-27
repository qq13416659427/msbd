import regit from '../until/allocation'

function getcode (data) {
  return regit({
    url: '/au/code',
    method: 'post',
    data
  })
}
function toLogin (data) {
  return regit({
    url: '/au/login',
    method: 'post',
    data
  })
}
export { getcode, toLogin }
