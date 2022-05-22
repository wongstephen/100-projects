//filter buttons
const btn = document.querySelectorAll('.btn')
const storeItem = document.querySelectorAll('.store-item')
// data filter: all, cake, cupcake, sweet, doughnuts

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


//searchbox

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

