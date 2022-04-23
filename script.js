function mandaZap (element) {
    let tel = prompt('Para qual número deseja mandar? (11 12345-6789')
    let message = element.firstElementChild.innerText
    let zapLink = `https://api.whatsapp.com/send?phone=55${tel}&text=${message}`
    window.open(zapLink)
}

function addMessage () {
    const add = document.querySelector('#master')
    const newMessage = add.children[0].cloneNode(true)
    const pos = add.children.length - 1
    add.insertBefore(newMessage, add.children[pos])
    let message =prompt('Digite a nova mensagem')
    add.children[pos].querySelector('p').innerText = message
}
