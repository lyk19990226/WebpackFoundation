import '../css/style.css'
function components() {
  const divEl = document.createElement('div')
  divEl.textContent = '花里胡哨'
  divEl.classList.add('content')
  return divEl
}
document.body.append(components())