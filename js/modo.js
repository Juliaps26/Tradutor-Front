
// Ativar modo dark
const chk = document.getElementById('chk')
const text = document.getElementById('text')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
  text.classList.toggle('dark-texto')

  
  const img = chk.nextElementSibling.children[0].children[0].children[0]
  if(img.src.includes('sol')){
    img.src = '../img/lua.png'
  }else{
    img.src = '../img/sol.png'
  }

})


// Quando digitar alice mudar a cor do background
const textoDigitado = document.getElementById('textoDigitado')

textoDigitado.addEventListener('input', function(){
  const inputValue = textoDigitado.value.toLowerCase();
  const fundoMudar = inputValue.includes('alice');

  if(fundoMudar){
    document.body.classList.add('fundo-mudar')

  }else{
    document.body.classList.remove('fundo-mudar')
  }
})






