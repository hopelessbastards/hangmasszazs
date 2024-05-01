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



app.post('/newsletter', (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const mailOptions = {
	  from: 'vkiss1993@gmail.com',
	  to: email,
	  subject: 'Üdvözöllek Angyalföldi pihenő szigeten',
	  text: 'Kedves ' + name + ' \n\nKöszöntelek Angyalföldi pihenő szigeten. Ezennel feliratkoztál a hírlevelemre.\n\nSzeretettel,\nVadász Szilvi'
	};
	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    res.status(500).send('Error');
	  } else {
	    console.log('Email sent: ' + info.response);
	  }
	});
	const mailOptionsSzilvi = {
	  from: 'vkiss1993@gmail.com',
	  to: 'vszilvi78@gmail.com',
	  subject: 'Új feliratkozó',
	  text: '' + name + ' feliratkozott a hírlevélre. Email címe ' + email
	};
	transporter.sendMail(mailOptionsSzilvi, function(error, info){
	  if (error) {
	    res.status(500).send('Error');
	  } else {
	    res.status(200).send('POST request received successfully');
	  }
	});
});



server.listen(PORT, () => console.log(`Listening on ${ PORT }`))



