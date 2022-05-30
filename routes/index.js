var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');
var config = require('../config');
var transporter = nodemailer.createTransport(config.mailer); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CCI-A platform for sharing code' });
});



module.exports = router;