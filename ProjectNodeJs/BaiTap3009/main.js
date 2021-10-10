// var http = require('http');

// var fs = require('fs');

// http.createServer(function(req, res){

//     res.writeHead('200', {'content-type': 'text/html'});

//     fs.readFile('home.html', 'utf8', function(err, data){
//         if (err) throw err;

//         res.write(data, 'utf8');

//         res.end();
//     })
// }).listen(8080)


var fs = require('fs');

var content = 'Nội dung này tôi muốn ghi vào file writer.html';

fs.writeFile('writer.html') , content, function(err) {
    if (err) throw err;
    else console.log('Ghi file thanh cong!')
}