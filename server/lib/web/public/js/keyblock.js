Mousetrap.bind(['F12', 'Ctrl+Shift+I', 'Ctrl+Shift+K', 'Ctrl+Z', 'Ctrl+Y', 'Ctrl+C', "Ctrl+V"], _ => false)
Object.defineProperty(window, 'prepareBot', {
  writable: false
})
var talk = document.getElementById('Talk')
/*
var originalValue = talk.value
Object.defineProperty(talk, "value", {
  set: function (a) {
    if(/[가-힣]+/.test(originalValue) && a.length !== originalValue.length && /[ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎa-zA-Z0-9]/.test(a.slice(-1))) {
      // 로깅 필요!!
      // 입력이 "가"에서 바로 "가나"로 변하는 케이스를 감지함.
    }
    originalValue = a
  },
  get: _ => originalValue
})
// 보내지지 않는 버그 존재함
*/
function disable (event) {
  event.preventDefault()
}
Object.defineProperty(talk, 'onpaste', { value: disable, writable: false })
Object.defineProperty(document.getElementById('game-input'), 'onpaste', { value: disable, writable: false })