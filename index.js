const venom = require('venom-bot');

venom
//.create(null,null,null,{headless:false}) //Exibe o navegador na tela
  .create()
  .then((client) => start(client));

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Oi' || message.body === 'Olá') {
      client.sendText(message.from, `Olá! Tudo bem com você ${message.from}?`)
        .then((result) => console.log('Result: ', result))
        .catch((erro) => console.log('Erro ao enviar a mensagem %s', erro));
    }
  })
}