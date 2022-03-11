const visor = document.getElementById('visor')
const res = document.getElementById('res')

function insert(Calcule) {
  let numero = visor.innerHTML;
  visor.innerHTML = numero + Calcule
}

function clean() {
  let clean = visor.innerHTML;
  visor.innerHTML = ''
}

function back() {
  let back = visor.innerHTML;
  visor.innerHTML = back.substring(0, back.length - 1)
}

function calcular(number) {
  let resultado = visor.innerHTML;
  if(resultado) {
    visor.innerHTML = eval(resultado)
  }
  else {
    visor.innerHTML = 'Nulo'
  }
}
