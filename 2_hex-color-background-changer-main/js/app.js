const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const button = document.querySelector('.btn');
const hexArr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
button.addEventListener('click', function(){
    let hexOutput = ''
    for (let i = 0; i<6; i++) {
        hexOutput += hexArr[parseInt(Math.random()*hexArr.length)]
    }
        body.style.backgroundColor = '#'+hexOutput;
        h1.innerHTML = '#'+hexOutput;
})