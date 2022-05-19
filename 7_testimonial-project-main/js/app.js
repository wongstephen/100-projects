//query selectors
const customerImage = document.querySelector('#customer-img')
const customerName = document.querySelector('#customer-name')
const customerText = document.querySelector('#customer-text')
const btn = document.querySelectorAll('.btn')

//create array of customers
function Customer(img, name, text) {
    this.img = img
    this.name = name
    this.text = text
}

let customers = [];

function createCustomer (img, name, text) {
    let fullImg = `./img/customer-${img}.jpg`
    let customer = new Customer(img, name, text)
    customers.push(customer)
}
//button actions
btn.forEach(e => {
    let count = 0
    if(e.classList.contains('prevBtn')) {
        e.addEventListener('click', function() {
            count--
            if (count === -1) {count = 4}
            customerTest (count) 
        })
    }
    if(e.classList.contains('nextBtn')) {
        e.addEventListener('click', function()  {
            count++
            if (count === 5) {count = 0}
            customerTest (count) 
        })
    }
})

function customerTest (count) {
    customerName.innerHTML = customers[count].name
    customerText.innerHTML = customers[count].text
    customerImage.src = `./img/customer-${count}.jpg`
}

createCustomer(0, 'JOHN', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
createCustomer(1, 'SANDY', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
createCustomer(2, 'AMY', "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.")
createCustomer(3, 'TYRELL', "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.")
createCustomer(4, 'WANDA', "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")

