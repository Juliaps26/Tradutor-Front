// Ativar modo dark
const chk = document.getElementById('chk')
const text = document.getElementById('text')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
  text.classList.toggle('dark-texto')

})