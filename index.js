const express = require('express')
const app = express()
const nodemailer = require('nodemailer');
const path = require('path');
const http = require('http');
const PORT = process.env.PORT || 5000  

    //initialize a simple http server
const server = http.createServer(app);


// az alsó két beállítás azért kell, hogy a rest request bodyjából ki tudjunk szedni adatokat
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

app.use(express.static('public'));

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vkiss1993@gmail.com',
    pass: 'ogwo bait xzok pfzj'
  }
});

var mailOptions = {
  from: 'vkiss1993@gmail.com',
  to: 'vkiss1993@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

server.listen(PORT, () => console.log(`Listening on ${ PORT }`))



