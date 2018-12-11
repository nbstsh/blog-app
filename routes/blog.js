const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Blog = require('../models/blog');

//INDEX
router.get('/', (req, res) => {
    Blog.find({}, (err, blogs) => {
        if (err) {
            console.log(err);
            return res.redirect('back');
        }

        res.render('blogs/index', { blogs: blogs });
    });
})

//NEW
router.get('/new', (req, res) => {
    res.render('blogs/new');
})

//CREATE
router.post('/', (req, res) => {
    Blog.create(req.body.blog, (err, blog) => {
        if (err) {
            console.log(err);
            return res.redirect('back');
        }

        res.redirect('/blogs');
    });
})

//SHOW
router.get('/:id', (req, res) => {
    Blog.findById(req.params.id, (err, blog) => {
        if (err) {
            console.log(err);
            return res.redirect('back');
        }

        res.render('blogs/show', { blog: blog })
    })
})

//EDIT
router.get('/:id/edit', (req, res) => {
    Blog.findById(req.params.id, (err, blog) => {
        if (err) {
            console.log(err);
            return res.render('back');
        }
        console.log(blog);
        res.render('blogs/edit', { blog: blog });
    })
})

//UPDATE
router.put('/:id', (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, blog) => {
        if (err) {
            console.log(err);
            return res.render('back');
        }

        res.redirect(`/blogs/${blog._id}`);
    })
})

//DELETE
router.delete('/:id', (req, res) => {
    res.send('delete');
})


module.exports = router;