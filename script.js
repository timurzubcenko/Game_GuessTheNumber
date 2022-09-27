const input = document.querySelector('#input')
const h3 = document.querySelector('h3')
const btn = document.querySelector('button')
const p = document.querySelector('p')

let number = Math.floor(Math.random() * 100)
let tries = 0

console.log(number)

btn.addEventListener('click', LowHight)
input.addEventListener('keydown', clickEnter)

function LowHight() {
    if (input.value > number) {
        p.innerText = 'Число меньше'
        tries++
    }
    else if (input.value === '') {
        p.innerText = 'Input пуст'
    }
    else if (Number(input.value) < number) {
        p.innerText = 'Число больше'
        tries++
    }
    else if (Number(input.value) == number) {
        p.innerText = `Угадал!!! Загаданое число: ${number}`
    }
    else if (String(input.value)) {
        p.innerText = 'Введите число!'
    }
    input.value = ""
    if (tries === 5) {
        p.innerText = `Проиграл!!! Загаданое число: ${number}`
    }
    console.log(tries)
}

function clickEnter(e) {
    if (e.keyCode === 13) {
        LowHight()
    }
}