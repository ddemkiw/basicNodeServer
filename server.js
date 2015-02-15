var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.get('/', function(request, response){
  response.render('index', request.query)
});

server.listen(3000, function(){
  console.log("Server listening on port 99999");
});

module.exports = server;