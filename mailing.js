var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',

  auth: {
    user: '', 
  
    pass: '' 
  }


});

var mailOptions = {
    from: '',
    to: '',
    subject: 'Sending Email using Node.js',
    text: 'Hello Node JS workshop'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
  
  module.exports=transporter;