var fs = require('fs');
var request = require('request');
var readlineSync = require('readline-sync');

var url = readlineSync.question('Qual a URL meu parceiro? ');
var filename = readlineSync.question('Passa o nome do arquivo aí fazendo favor '); 

var download = function(url, filename, callback) {
    request.head(url, function(err, res, body) {
        request(url).pipe(fs.createWriteStream(filename).on('close', callback));
    });
};

download(url, filename, function() {
    console.log("pronto!");
})