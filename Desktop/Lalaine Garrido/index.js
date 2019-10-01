const express = require('express');
const app = express();
var port = 8000;
const pug = require('pug');
var fs = require('fs');

app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.render('index')
})



app.get('/provinces/:subject', (req, res) => {
    var file = req.params.subject
    var path = file + ".json"
    fs.readFile(path, function (err, data) {
        var content = JSON.parse(data);
        console.log(content)
        var send = '<body><h1>'
        send += content.name + '<img style="height:20%; src="'+ content.img1 + "'>"+ content.population+ content.group + "</h1></body>"
        res.writeHead(200, { 'Content-Type': 'text/html', "Access-Control-Allow-Origin": "*" });
        res.write(send);
        res.end();
    });
})
app.listen(port, () => console.log(`Initializing port ${port}!`))