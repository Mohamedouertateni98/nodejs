var generator = require('generate-password');

var password = generator.generate();

console.log("the generated password is the following:",password);


module.exports=password;