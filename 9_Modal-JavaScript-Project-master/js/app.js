//Grab buttons from DOM
const btn = document.querySelectorAll('.btn')
//Grab store items from DOM
const storeItem = document.querySelectorAll('.store-item') // data filter: all, cake, cupcake, sweet, doughnuts

//Filter Function
btn.forEach(btnClick=>{
    btnClick.addEventListener('click', function (){
        const filter = btnClick.dataset.filter
        if (filter === 'all') {
            storeItem.forEach(e=>{
                e.style.display = 'block';
            })
        } else {
            storeItem.forEach(e=>{
                if (e.dataset.item === filter) {
                    console.log(e.dataset.item)
                    e.style.display = 'block'
                } 
                else {
                    e.style.display = 'none'
                }
            })
        }

    })
})


//Searchbox Function
const searchItem = document.querySelector('#search-item')
const searchIcon = document.querySelector('#search-icon')
searchIcon.addEventListener('click', function (){
    const searchValue = searchItem.value.toLowerCase().trim()
    storeItem.forEach(e => {
        if (e.textContent.includes(searchValue)) {
            e.style.display = 'block'
        } else {
            e.style.display = 'none'
        }
    })
})

//Modal function

function modal(){
    document.querySelectorAll('.img-container').forEach(e=>{
        e.addEventListener('click', function () {
            const picture = e.firstElementChild.src
            document.querySelector('.lightbox-item').style.backgroundImage = `url("${picture}")`
            document.querySelector('.lightbox-container').classList.add('show');
        
        console.log(picture[picture.lastIndexOf('-')+1])
        })

    })

}
modal()

//close modal
document.querySelector('.fa-window-close').addEventListener('click', function (){
    console.log('close click')
    document.querySelector('.lightbox-container').classList.remove('show')
})




console.log('test')
