// value from #message
// Submit #submitBtn
// Last Message Delivered .message-content

    const userInput = document.querySelector('#message')
    const button = document.querySelector('#submitBtn')
    const alert = document.querySelector('.alert')
    const messageContent = document.querySelector('.message-content')

    button.addEventListener('click', checkInput)
    function checkInput (e) {
        e.preventDefault()
        if (userInput.value === '') {
            alert.classList.add('show')
            setTimeout(function() {
                alert.classList.remove('show')
            }, 2000)
        } else {
            messageContent.innerHTML = userInput.value
            userInput.value = ''
        }
    }
    


