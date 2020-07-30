import regit from '../until/allocation'
import { getToken } from '../until/local.js'

function getInfo () {
  return regit({
    url: '/au/info',
    headers: { authorization: 'Bearer ' + getToken() }
  })
}
function editData (data) {
  return regit({
    url: '/au/edit',
    method: 'post',
    data,
    headers: { authorization: 'Bearer ' + getToken() }
  })
}
function photoup (data) {
  return regit({
    url: '/upload',
    method: 'post',
    data,
    headers: { authorization: 'Bearer ' + getToken() }
  })
}
export { getInfo, editData, photoup }
