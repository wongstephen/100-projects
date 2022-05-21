//filter buttons
const btn = document.querySelectorAll('.btn')
const storeItem = document.querySelectorAll('.store-item')
// data filter: all, cake, cupcake, sweet, doughnuts

storeItem.forEach (e => {
    if (e.classList.contains(!'doughnut')) {
        e.style.display = 'none'
    }
})

console.log('test1')