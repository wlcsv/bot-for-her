const request = require('request');
const cheerio = require('cheerio');

var html = request.get('https://www.pensador.com/frases_cristas/');
