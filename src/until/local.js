const xxx = 'token'

function saveToken (token) {
  window.localStorage.setItem(xxx, token)
}
function getToken (token) {
  window.localStorage.getItem(xxx, token)
}
function delToken (token) {
  window.localStorage.removeItem(xxx, token)
}

export { saveToken, getToken, delToken }
