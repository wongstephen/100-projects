const btn = document.querySelectorAll('.btn')
const btnClear = document.querySelector('.btn-clear')
const btnEqual = document.querySelector('.btn-equal')
const screen = document.querySelector('.screen')

// screen.value = 'test'
// console.log(screen)
let storedValue = []
btn.forEach(e => {
    e.addEventListener('click', function() {
        storedValue.push(e.dataset.num);
        screen.value = storedValue.join('')
    })
})

//clear button
btnClear.addEventListener('click', function(){
    storedValue.length = 0;
    screen.value = "" 
})

btnEqual.addEventListener('click', function(){
    const calc = Number(storedValue.join(''))
    calc+0
    console.log(calc)
})