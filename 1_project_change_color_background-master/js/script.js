
let changeColor = document.querySelector('.btn')
changeColor.addEventListener('click', function() {
    const random = Math.floor(Math.random()*255)
    const random2 = Math.floor(Math.random()*255)
    const random3 = Math.floor(Math.random()*255)
    document.querySelector('body').style.backgroundColor = `rgba(${random},${random2},${random3},1)`
})