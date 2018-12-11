const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// MONGODB CONFIG
mongoose.connect('mongodb://localhost:27017/blog_app', { useNewUrlParser: true });


// APP CONFIG
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true }))


app.get('/', function (req, res) {
    res.render('index');
})

app.get('/*', function (req, res) {
    res.send('sorry....no page found....');
})

app.listen(3000, () => {
    console.log('BLOG APP SERVER HAS STARTED!!!');
})

