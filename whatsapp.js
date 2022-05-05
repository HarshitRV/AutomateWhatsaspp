const qrcode = require("qrcode-terminal");

const { Client } = require("whatsapp-web.js");
const client = new Client();

const { formatedMessage } = require("./utils/message");

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', ()=>{
    console.log('Whatsapp Web is ready')
});

client.on('message', async (message) => {
    
    console.log(formatedMessage(message));

    if(message.body === '!ping'){
        client.sendMessage(message.from, "Pong!");
    }

});

module.exports = client;