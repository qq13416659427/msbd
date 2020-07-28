const xxx = 'token'

function saveToken (token) {
  window.localStorage.setItem(xxx, token)
}
function getToken () {
  var x = window.localStorage.getItem(xxx)
  return x
}
function delToken () {
  window.localStorage.removeItem(xxx)
}

export { saveToken, getToken, delToken }
