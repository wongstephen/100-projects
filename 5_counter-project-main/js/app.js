const displayNum = document.querySelector('#counter'); //main 
const prevBtn = document.querySelector('.prevBtn') //button minus 1
const nextBtn = document.querySelector('.nextBtn') //up one

// console.log(Number(displayNum.innerHTML)+34)

//press button
prevBtn.addEventListener('click', function () {
    subtract();
    if (Number(displayNum.innerHTML)<0) {
        displayNum.style.color = 'red'
    }
    })
nextBtn.addEventListener('click', function () {
    add();
    if (Number(displayNum.innerHTML)>=0) {
        displayNum.style.color = 'black'
    }
    })

function add () {
    displayNum.innerHTML =  Number(displayNum.innerHTML)+1
}
function subtract () {
    displayNum.innerHTML = Number(displayNum.innerHTML)-1
}
