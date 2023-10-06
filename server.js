// Require the Express module
const express = require('express');
const child_process = require('child_process');

// Create an Express web application
const app = express();

// Set handler for the index of the website
app.get('/', (req, res) => {
    // Run the system `fortune` command and respond with the message
    child_process.exec('fortune', (error, message) => {
    if(error === null) {
    res.send("Your Mom says that: " + message + Date());
    } else {
    res.send('Error: ' + error);
    }
    })
    });

// Start web application server
app.listen(3000, () => {
    console.log('Server started');
    });
    
