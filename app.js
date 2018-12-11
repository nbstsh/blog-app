const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
//ROUTES
const blogRoutes = require('./routes/blog');

// MONGODB CONFIG
mongoose.connect('mongodb://localhost:27017/blog_app', { useNewUrlParser: true });

//seedDB
// require('./seedDB')();

// APP CONFIG
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true }))
app.use(methodOverride('_method'));

//ROUTES CONFIG
app.use('/blogs', blogRoutes);

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/*', (req, res) => {
    res.send('sorry....no page found....');
})

app.listen(3000, () => {
    console.log('BLOG APP SERVER HAS STARTED!!!');
})

