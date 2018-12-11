const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Blog = require('../models/blog');

//INDEX
router.get('/', (req, res) => {
    Blog.find({}, (err, blogs) => {
        if (err) {
            console.log(err);
            res.redirect('back');
        }

        res.render('blogs/index', { blogs: blogs });
    });
})

//NEW
router.get('/new', (req, res) => {
    res.send('new');
})

//CREATE
router.post('/:id', (req, res) => {
    res.send('create');
})

//SHOW
router.get('/:id', (req, res) => {
    res.send('show');
})

//EDIT
router.get('/:id/edit', (req, res) => {
    res.send('edit');
})

//UPDATE
router.put('/:id', (req, res) => {
    res.send('Update');
})

//DELETE
router.delete('/:id', (req, res) => {
    res.send('delete');
})


module.exports = router;