// function sayHello(name){
//     console.log("Hello" + name);
// }
// sayHello('Nguyen Van Son')

// console.log(module);

// const log = require('./logger');
// log('message')

// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();


// console.log(`Total Menory: ${totalMemory}`)
// console.log(`Free Menory: ${freeMemory}`)

// const fs = require('fs');

// fs.readdir('$', function(err, files) {
//     if (err)
//         console.error('Error ' + err);
//     else 
//         console.log('Result '+ files); 
// });

// const EventEmitter = require('events');

// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('messageLogged', function(arguments) {
//     console.log('Listener called', arguments);
// });

// logger.log('message')

const http = require('http');

const sever = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello Nguyen Van Son');
        res.end();
    }
    if(req.url === '/login'){
        res.write(JSON.stringify('Please Login'));
        res.end();
    }
});


sever.listen(2000);

console.log('Listening on port 2000....')