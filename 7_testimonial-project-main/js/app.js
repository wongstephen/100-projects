
// .\img\customer-0.jpg
// .\img\customer-1.jpg
// .\img\customer-2.jpg
// .\img\customer-3.jpg
// .\img\customer-4.jpg

//Query Selectors
const customerImg = document.querySelector('#customer-img');     //profile photo
const customerName = document.querySelector('#customer-name');    //customer name
const customerText = document.querySelector('#customer-text');    //quotes
const prevBtn = document.querySelector('.prevBtn');    //buttons
const nextBtn = document.querySelector('.nextBtn');    //buttons
let count = 0;

//Class Constructor
const customers = [];

function Customer(img, name, quote) {
    this.img = img;
    this.name = name;
    this.quote = quote;
}

function createCustomer(img, name, quote) {
    let fullImg = `./img/customer-${img}.jpg`;
    let customer = new Customer(fullImg, name, quote);
    customers.push(customer);
}

createCustomer(0, 'JOHN', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
createCustomer(1, 'SANDY', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
createCustomer(2, 'AMY', "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.")
createCustomer(3, 'TYRELL', "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.")
createCustomer(4, 'WANDA', "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")

//DOM Manipulation
prevBtn.addEventListener('click', function () {
    count--
    if (count === -1) {
        count = 4;
    }
    customerImg.src = customers[count].img
    customerText.innerHTML = customers[count].quote
    customerName.innerHTML = customers[count].name

    console.log(count)
})
// nextBtn
nextBtn.addEventListener('click', function () {
    count++
    if (count === 5) {
        count = 0;
    }
    customerImg.src = customers[count].img
    customerText.innerHTML = customers[count].quote
    customerName.innerHTML = customers[count].name
})


