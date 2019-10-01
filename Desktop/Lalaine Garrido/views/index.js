const express = require('express');
const app = express();
var port = process.env.PORT||3000;
const pug = require('pug');
var fs = require('fs');
var path = require('path');
app.set('view engine', 'pug');
app.set('views', 'views');
var getRequest = require('./getRequest');

app.get('/', (req, res) => {
    res.send('<h1>Cannot found! Please specify the province you want to visit.</h1>')
})

app.use(function(req, res, next){
    getRequest();
    next();
})

app.use(express.static(path.resolve('./public')))

app.get('/provinces/:subject', (req, res) => {
    var file = req.params.subject
    var path = file + ".json"
    fs.readFile(path, function (err, data) {
        if (err) throw err
        var object = JSON.parse(data);
        res.render('index', {
            name : object.name,
            img1 : object.images[0],
            img2 : object.images[1],
            img3 : object.images[2],
            group : object.group,
            population : object.population,
            delicacies : object.delicacies,
            texts : object.texts,
            rating : res.result
        })
    });
})
app.listen(port, () => console.log(`Initializing port ${port}!`))