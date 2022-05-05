# Automate WhatsApp messages.

A simple NodeJS app to automate sending messages from your WhatsApp account.

1. Install the dependencies
   ```bash
    npm install
   ```
2. Configure the ```init.js``` file to set the time for sending the messages.
    ```bash
    {   
        message: "Sent from nodejs", // Your message
        hour: 12, // 24-hour clock
        minute: 5, 
        phoneNumber: 'RECEIVER_PHONE_NUMBER'+'@c.us' // eg: 91xxxxxxxxx @c.us
    }
    ```
3. Run the application
    ```bash
    npm start
    ```
4. Check the console.
5. Scan the QR code to login to your whatsapp account.
6. Now wait for the messages to be sent.