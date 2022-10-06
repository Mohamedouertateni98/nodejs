console.log("HELLO WORLD")


////


const http = require('http');

const server = http.createServer(function (req,res){
res.write('<h1>Hello Node!!!!</h1>\n');
res.end();





});

// welcome text

const fs=require("fs")
fs.writeFile("welcome.txt","Hello Node",err=> {
        err?console.log("error writeFile is",err):console.log("no error to display"); })

fs.readFile('welcome.txt',  (err, data)=> {
    err?console.log("error readFile is",err):console.log("The content of welcome.txt is : " + data.toString());
 });



 // password

 var password = require('./password-generator');

 // email
 var transporter = require('./email-sender');



server.listen(3000, err=>{err?console.log(err):console.log("server is running on http://localhost:3000/")});
