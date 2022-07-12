function mandaZap(element) {
  const message = element.textContent;
  const tel = prompt("Para qual número deseja mandar? (11) 12345-6789");
  if (tel) {
    window.open(`https://api.whatsapp.com/send?phone=55${tel}&text=${message}`);
  }
}

function addMessage() {
  const message = prompt("Digite a nova mensagem");
  if(message) {
  const master = document.querySelector("#master");
  const newMessage = master.children[0].cloneNode(true);
  const pos = master.children.length - 1;
  master.insertBefore(newMessage, master.children[pos]);
  master.children[pos].querySelector("p").innerText = message;
  }
}
