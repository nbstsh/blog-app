const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//INDEX
router.get('/', function (req, res) {
    res.send('index');
})

//NEW
router.get('/new', function (req, res) {
    res.send('new');
})

//CREATE
router.post('/:id', function (req, res) {
    res.send('create');
})

//SHOW
router.get('/:id', function (req, res) {
    res.send('show');
})

//EDIT
router.get('/:id/edit', function (req, res) {
    res.send('edit');
})

//UPDATE
router.put('/:id', function (req, res) {
    res.send('Update');
})

//DELETE
router.delete('/:id', function (req, res) {
    res.send('delete');
})


module.exports = router;