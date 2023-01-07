const body = document.body
const box = document.querySelector('#box')
const slider = document.querySelector('#slider')
const ball = document.querySelector('#ball')
const screen = document.querySelector('#screen')
const keypad = document.querySelector('#btns-container')
const keys = document.querySelectorAll('.calc-btns')
const Del = document.querySelector('#del')
const reset = document.querySelector('#reset')
const equal = document.querySelector('#equal')

function ballOn1() {
  body.style.backgroundColor = 'hsl(222, 26%, 31%)'
  box.style.color = 'hsl(0, 0%, 100%)'
  slider.style.backgroundColor = 'hsl(224, 36%, 15%)'
  ball.style.left = '4px'
  ball.style.backgroundColor = 'hsl(6, 63%, 50%)'
  screen.style.backgroundColor = 'hsl(224, 36%, 15%)'
  screen.style.color = 'hsl(0, 0%, 100%)'
  keypad.style.backgroundColor = 'hsl(223, 31%, 20%)'
  keys.forEach(item => {
    item.style.backgroundColor = 'hsl(30, 25%, 89%)'
    item.style.color = 'hsl(221, 14%, 31%)'
    item.style.boxShadow = 'inset 0 -4px 0 0 hsl(28, 16%, 65%)'
  })
  Del.style.backgroundColor = 'hsl(225, 21%, 49%)'
  Del.style.color = 'hsl(0, 0%, 100%)'
  Del.style.boxShadow = 'inset 0 -4px 0 0 hsl(224, 28%, 35%)'
  reset.style.backgroundColor = 'hsl(225, 21%, 49%)'
  reset.style.color = 'hsl(0, 0%, 100%)'
  reset.style.boxShadow = 'inset 0 -4px 0 0 hsl(224, 28%, 35%)'
  equal.style.backgroundColor = 'hsl(6, 63%, 50%)'
  equal.style.color = 'hsl(0, 0%, 100%)'
  equal.style.boxShadow = 'inset 0 -4px 0 0 hsl(6, 70%, 34%)'
}

function ballOn2() {
  body.style.backgroundColor = 'hsl(0, 0%, 90%)'
  box.style.color = 'hsl(60, 10%, 19%)'
  slider.style.backgroundColor = 'hsl(0, 0%, 93%)'
  ball.style.left = '27px'
  ball.style.backgroundColor = 'hsl(25, 98%, 40%)'
  screen.style.backgroundColor = 'hsl(0, 0%, 93%)'
  screen.style.color = 'hsl(60, 10%, 19%)'
  keypad.style.backgroundColor = 'hsl(0, 5%, 81%)'
  keys.forEach(item => {
    item.style.backgroundColor = 'hsl(45, 7%, 89%)'
    item.style.color = 'hsl(60, 10%, 19%)'
    item.style.boxShadow = 'inset 0 -4px 0 0 hsl(35, 11%, 61%)'
  })
  Del.style.backgroundColor = 'hsl(185, 42%, 37%)'
  Del.style.color = 'hsl(0, 0%, 100%)'
  Del.style.boxShadow = 'inset 0 -4px 0 0 hsl(185, 58%, 25%)'
  reset.style.backgroundColor = 'hsl(185, 42%, 37%)'
  reset.style.color = 'hsl(0, 0%, 100%)'
  reset.style.boxShadow = 'inset 0 -4px 0 0 hsl(185, 58%, 25%)'
  equal.style.backgroundColor = 'hsl(25, 98%, 40%)'
  equal.style.color = 'hsl(0, 0%, 100%)'
  equal.style.boxShadow = 'inset 0 -4px 0 0 hsl(25, 99%, 27%)'
}

function ballOn3() {
  body.style.backgroundColor = 'hsl(268, 75%, 9%)'
  box.style.color = 'hsl(52, 100%, 62%)'
  slider.style.backgroundColor = 'hsl(268, 71%, 12%)'
  ball.style.left = '52px'
  ball.style.backgroundColor = 'hsl(176, 100%, 44%)'
  screen.style.backgroundColor = 'hsl(268, 71%, 12%)'
  screen.style.color = 'hsl(52, 100%, 62%)'
  keypad.style.backgroundColor = 'hsl(268, 71%, 12%)'
  keys.forEach(item => {
    item.style.backgroundColor = 'hsl(268, 47%, 21%)'
    item.style.color = 'hsl(52, 100%, 62%)'
    item.style.boxShadow = 'inset 0 -4px 0 0 hsl(290, 70%, 36%)'
  })
  Del.style.backgroundColor = 'hsl(281, 89%, 26%)'
  Del.style.color = 'hsl(0, 0%, 100%)'
  Del.style.boxShadow = 'inset 0 -4px 0 0 hsl(285, 91%, 52%)'
  reset.style.backgroundColor = 'hsl(281, 89%, 26%)'
  reset.style.color = 'hsl(0, 0%, 100%)'
  reset.style.boxShadow = 'inset 0 -4px 0 0 hsl(285, 91%, 52%)'
  equal.style.backgroundColor = 'hsl(176, 100%, 44%)'
  equal.style.color = 'hsl(198, 20%, 13%)'
  equal.style.boxShadow = 'inset 0 -4px 0 0 hsl(177, 92%, 70%)'
}

const zero = document.querySelector('#zero')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const decimal = document.querySelector('#decimal')
const divide = document.querySelector('#Divide')
const multiply = document.querySelector('#multiply')
const add = document.querySelector('#add')
const sub = document.querySelector('#sub')
const result = document.querySelector('#screen-result')

zero.addEventListener('click', () => {
  result.innerHTML += '0'
})

one.addEventListener('click', () => {
  result.innerHTML += '1'
})

two.addEventListener('click', () => {
  result.innerHTML += '2'
})

three.addEventListener('click', () => {
  result.innerHTML += '3'
})

four.addEventListener('click', () => {
  result.innerHTML += '4'
})

five.addEventListener('click', () => {
  result.innerHTML += '5'
})

six.addEventListener('click', () => {
  result.innerHTML += '6'
})

seven.addEventListener('click', () => {
  result.innerHTML += '7'
})

eight.addEventListener('click', () => {
  result.innerHTML += '8'
})

nine.addEventListener('click', () => {
  result.innerHTML += '9'
})

add.addEventListener('click', () => {
  result.innerHTML += '+'
})

sub.addEventListener('click', () => {
  result.innerHTML += '-'
})

multiply.addEventListener('click', () => {
  result.innerHTML += '*'
})

divide.addEventListener('click', () => {
  result.innerHTML += '/'
})

decimal.addEventListener('click', () => {
  result.innerHTML += '.'
})

Del.addEventListener('click', () => {
  result.innerHTML = result.innerHTML.slice(0, result.innerHTML.length - 1)
})

reset.addEventListener('click', () => {
  result.innerHTML = ''
})

equal.addEventListener('click', () => {
  const ans = result.innerHTML
  const cal = eval(ans)
  return (result.innerHTML = cal)
})
