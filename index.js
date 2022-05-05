const express = require("express");

const app = express();

const client = require("./whatsapp");

const PORT = process.env.PORT || 3000;

const { init } = require("./init");

const interval = setInterval(async () => {
    try {
        const now = new Date();

        console.log('Time now: ',now.getHours(), now.getMinutes(), now.getSeconds());

        if (now.getHours() === init.hour && now.getMinutes() === init.minute) {

            const res = await client.sendMessage(init.phoneNumber, init.message);

            if(res) console.log("Message sent");

            clearInterval(interval);
        }
    } catch (err) {

        console.log("Failed to send message, check init.js for correct phone number");

        console.log(err);

        clearInterval(interval);
    }
}, 1000);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    client.initialize();
});