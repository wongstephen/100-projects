//try number 2

//input value #message
//submit #submitBtn
//error h5
//returnMsg .message-context

//when value is entered into the input, and when user presses select. 
//Hello world changes to value that was passes
//but if nothing was passed, then an alert happens but goes away in 2 sectonds

//if Seattle in put, then Seattle is displaced in place of hello work
//if nothing in input, then error shows and goes back to original state in 2 seconds

//eventlistenter
const submitBtn = document.querySelector('#submitBtn')
submitBtn.addEventListener('click', startEvent)
//pulls value from input
function startEvent (e) {    
    const retreiveMsg = document.querySelector('#message').value;
    e.preventDefault()
    if (retreiveMsg === ''){ //empty value error
        const errorAlert = document.querySelector('.alert');
        errorAlert.classList.add('show')
        setTimeout(function () {errorAlert.classList.remove('show')}, 2000)
    } else { //pass value to message
        const newMsg = document.querySelector('.message-content')
        newMsg.innerHTML = retreiveMsg;
        document.querySelector('#message').value = ''
    }
}
//if empty then show error, if has value then replace hello world


