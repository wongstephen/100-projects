//variables from the document
const imgContainer = document.querySelector('.img-container')
const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')

let counter = 0;

//left and right buttons
btnRight.addEventListener('click', function () {
    counter++
    if (counter === 5) {
        counter = 0
    }
    imgContainer.style.background = `url(${picArray[counter]})`
})
btnLeft.addEventListener('click', function () {
    counter--
    if (counter === -1) {
        counter = 4 
    }
    imgContainer.style.background = `url(${picArray[counter]})`
})

//function that adds to the imgRotation var

    
const picArray = ['./img/contBcg-0.jpeg',
'./img/contBcg-1.jpeg',
'./img/contBcg-2.jpeg',
'./img/contBcg-3.jpeg',
'./img/contBcg-4.jpeg']


// imgContainer.style.backgroundImage = picArray[2]