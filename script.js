const input = document.querySelector('#input')
const h3 = document.querySelector('h3')
const btn = document.querySelector('button')
const p = document.querySelector('p')
const btns = document.querySelector('.btns')
const btnRestart = `<div class="btn">Начать заново</div>`

let number = Math.floor(Math.random() * 100)
console.log(number)

let tries = 0

//Play
btn.addEventListener('click', LowHight)
input.addEventListener('keydown', clickEnter)

//Restart
btns.addEventListener('click', restart)

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
        btns.innerHTML = btnRestart
        input.disabled = true
    }
    else if (String(input.value)) {
        p.innerText = 'Введите число!'
    }
    input.value = ""
    if (tries >= 5) {
        p.innerText = `Проиграл!!! Загаданое число: ${number}`
        btns.innerHTML = btnRestart
        input.disabled = true
    }
    console.log(tries)
}

function clickEnter(e) {
    if (e.keyCode === 13) {
        LowHight()
    }
}

function restart() {
    location.reload()
}
