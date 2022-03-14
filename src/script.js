

const visor = document.getElementById('visor')
const res = document.getElementById('res')
const body = document.getElementById('body')
const numeros = ['1','2','3','4','5','6','7','8','9','0','-','+','/','*']

function insert(Calcule) {
  let numero = visor.innerHTML;
  visor.innerHTML = numero + Calcule
}


body.addEventListener('keydown', (keypress) =>  {
  // let keybutton = Number(keypress.key)
  // if(keybutton = Number(keypress.key)) 
  if(numeros.includes(keypress.key)){
    let key = visor.innerHTML
    visor.innerHTML = key + keypress.key
  }
  if(keypress.key == 'Enter') {
    calcular()
  }
  if(keypress.key == 'Backspace') {
    back()
  }
})


function clean() {
  let clean = visor.innerHTML;
  visor.innerHTML = ''
}

function back() {
  let back = visor.innerHTML;
  if(back)
  {visor.innerHTML = back.substring(0, back.length - 1)}
  else return
  
}

function calcular() {
  let resultado = visor.innerHTML;
  if(resultado) {
    visor.innerHTML = eval(resultado)
  }
  else {
    visor.innerHTML = ''
  }
}

