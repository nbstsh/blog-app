const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String
});

module.exports = mongoose.model('Blog', blogSchema);