const qrcode = require("qrcode-terminal");

const { Client } = require("whatsapp-web.js");
const client = new Client();

const { fightClub, sarcasmApi } = require("./response/api-responses/quotes");

const { formatedMessage } = require("./utils/message");

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', ()=>{
    console.log('Whatsapp Web is ready')
});

client.on('authenticated', (session)=>{
    console.log('Authenticated', session);
});

client.on('message', async (message) => {
    
    console.log(formatedMessage(message));

    if(message.body === '!quote'){
        const quote = await fightClub();
        client.sendMessage(message.from, quote);
    }
    if(message.body === '!sarcasm'){
        const sarcasm = await sarcasmApi();
        client.sendMessage(message.from, sarcasm);
    }
});

module.exports = client;