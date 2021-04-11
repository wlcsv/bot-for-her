var fs = require('fs');
var request = require('request');
var readlineSync = require('readline-sync');

var url = 'aaaaa'
var filename = 'aaaaaaaa'

var download = function(url, filename, callback) {
    request.head(url, function(err, res, body) {
        request(url).pipe(fs.createWriteStream(filename).on('close', callback));
    });
};

download(url, filename, function() {
    console.log("done!");
})