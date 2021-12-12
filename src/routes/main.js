var express = require('express')
var router = express.Router()
// MIDDLEWARES
let userLogs = require('../middlewares/userLogs')
let admin = require('../middlewares/admin')

// GET INDEX PAGE
router.get('/', userLogs , function(req,res){
    res.render('index', userLogs)
})
router.get('/uno', userLogs , function(req,res){
    res.send("uno")
})
router.get('/dos', userLogs , function(req,res){
    res.send("dos")
})
router.get('/tres', userLogs , function(req,res){
    res.send("tres")
})
router.get('/admin', userLogs , admin , function(req,res){
    res.render('admin')
})
module.exports = router