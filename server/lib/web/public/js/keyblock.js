Mousetrap.bind(['F12', 'Ctrl+Shift+I', 'Ctrl+Shift+K', 'Ctrl+Z', 'Ctrl+Y'], _ => false)
Object.defineProperty(window, 'prepareBot', {
  writable: false
})
/*
var mo = new MutationObserver(record => {
  //node.nodeValue//record.oldValue
})
mo.observe(document.getElementById('Talk'))
*/